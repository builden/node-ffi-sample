#include "struct-type-test.h"
#include <iostream>

void structFunc(test1 *st)
{
	std::cout << "[C++] structFunc ";
	std::cout << st->a << " " << st->b << " " << st->c << std::endl;
}
