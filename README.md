# TypeScript Bug: Optional Parameters in Function Overloads

This repository demonstrates a common bug in TypeScript related to function overloading with optional parameters. The bug arises from the interaction of function overloads and optional parameters where unexpected type inference can occur. The solution demonstrates a way to address this issue.

## Bug Description
The TypeScript compiler's type inference system does not always behave as expected when dealing with optional parameters in overloaded functions. This can lead to runtime errors or unexpected results. The problem is amplified when the optional parameters interact with other types or constraints in the overloaded function signatures.

## Solution
The solution provides a corrected version of the overloaded function that utilizes type guards or additional constraints to ensure correct type checking and behavior. The solution addresses issues related to optional parameters in overloaded functions to eliminate runtime errors or unexpected results. 