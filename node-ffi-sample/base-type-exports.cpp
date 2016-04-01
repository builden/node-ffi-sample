#include "base-type-exports.h"
#include <iostream>

void voidFunc()
{
	std::cout << "[C++] call voidFunc" << std::endl;
}

int intFunc(int inInt, int *outInt)
{
	std::cout << "[C++] call intFunc " << inInt << std::endl;
	*outInt = inInt;
	return inInt;
}

bool boolFunc(bool inBool, bool *outBool)
{
	std::cout << "[C++] call boolFunc " << inBool << std::endl;
	*outBool = inBool;
	return inBool;
}

float floatFunc(float inFloat, float *outFloat)
{
	std::cout << "[C++] call floatFunc " << inFloat << std::endl;
	*outFloat = inFloat;
	return inFloat;
}

double doubleFunc(double inDouble, double *outDouble)
{
	std::cout << "[C++] call doubleFunc " << inDouble << std::endl;
	*outDouble = inDouble;
	return inDouble;
}

char charFunc(char inChar, char *outChar)
{
	std::cout << "[C++] call charFunc " << inChar<< std::endl;
	*outChar = inChar;
	return inChar;
}

bool strFunc(char *inStr, char *outStr, int outLen)
{
	std::cout << "[C++] call strFunc " << inStr << std::endl;
	strcpy_s(outStr, outLen, inStr);
	return true;
}

bool wstrFunc(wchar_t *inStr, wchar_t *outStr, int outLen)
{
	std::cout << "[C++] call wstrFunc" << std::endl;
	return false;
}