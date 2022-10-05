---
title: 自作 CPU RK8
---

![](img/arch.dio.svg)

| op   |     |     |     |                      |
| ---- | --- | --- | --- | -------------------- |
| add  | rd  | rs1 | rs2 | R[rd]=R[rs1]+R[rs2]  |
| addi | rd  | rs1 | imm | R[rd]=R[rs1]+imm     |
| mov  | imm | rs1 | rs2 | R[rs1+imm]=R[rs2]    |
| br   | imm | rs1 | rs2 | if(rs1=rs2) PC = imm |

![](img/decode.dio.svg)

| op   | Stage 0      | Stage 1      | Stage 2      | Stage 3                |
| ---- | ------------ | ------------ | ------------ | ---------------------- |
| add  | rs1 = R[rs1] | rs2 = R[rs2] | R[rd] = alu  | pc++                   |
| addi | rs1 = R[rs1] | -            | R[rd] = alu  | pc++                   |
| mov  | rs1 = R[rs1] | rs2 = R[rs2] | R[alu] = rs2 | pc++                   |
| br   | rs1 = R[rs1] | rs2 = R[rs2] | -            | pc = flag ? imm : pc++ |
