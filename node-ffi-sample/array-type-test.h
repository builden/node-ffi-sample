#pragma once
#include "exports-helper.h"

FFIAPI void intArrFunc(int *arr, int len);
FFIAPI void strArrFunc(char **arr, int len);
FFIAPI void wstrArrFunc(wchar_t **arr, int len);