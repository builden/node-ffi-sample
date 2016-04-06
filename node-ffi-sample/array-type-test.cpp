#include "array-type-test.h"
#include <iostream>

void intArrFunc(int *arr, int len)
{
	std::cout << "[C++] intArrFunc ";
	for (int i = 0; i < len; ++i) {
		std::cout << arr[i] << ' ';
	}
	std::cout << std::endl;
}

void strArrFunc(char **arr, int len)
{
	std::cout << "[C++] strArrFunc ";
	for (int i = 0; i < len; ++i) {
		std::cout << arr[i] << ' ';
	}
	std::cout << std::endl;
}

void wstrArrFunc(wchar_t **arr, int len)
{
	std::wcout.imbue(std::locale("chs"));
	std::cout << "[C++] wstrArrFunc ";
	for (int i = 0; i < len; ++i) {
		std::wcout << arr[i] << L' ';
	}
	std::cout << std::endl;
}
