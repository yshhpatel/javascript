#include <stdio.h>
int main()
{
    int a,b;
    printf("Enter First Number:");
    scanf("%d", &a);
    printf("Enter Second Number:");
    scanf("%d", &b);
    a = a + b;
    b = a - b;
    a= a - b;
    printf("After Swapping First Number:%d\n",a);
    printf("After Swapping Second Number:%d",b);
    return 0;
}