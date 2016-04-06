#pragma once
#include "exports-helper.h"

typedef struct _test1 {
	int a;
	int b;
	double c;
} test1;

FFIAPI void structFunc(test1 *st);