#pragma once
#include "exports-helper.h"

FFIAPI void voidFunc();
FFIAPI int intFunc(int inInt, int *outInt);
FFIAPI bool boolFunc(bool inBool, bool *outBool);
FFIAPI float floatFunc(float inFloat, float *outFloat);
FFIAPI double doubleFunc(double inDouble, double *outDouble);
FFIAPI char charFunc(char inChar, char *outChar);
FFIAPI int strFunc(char *inStr, char *outStr, int outLen);
FFIAPI int wstrFunc(wchar_t *inStr, wchar_t *outStr, int outLen);