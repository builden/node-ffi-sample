#pragma once

#ifdef NODEFFISAMPLE_EXPORTS
#define FFIAPI extern "C" __declspec(dllexport)
#else
#define FFIAPI extern "C" __declspec(dllimport)
#endif // NODEFFISAMPLE_EXPORTS
