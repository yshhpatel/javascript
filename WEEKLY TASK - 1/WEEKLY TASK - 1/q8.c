#include<stdio.h>
int main(){
int a = 0;
int b = 1;
int start =0;
int temp,number;
printf("Enter the term Number: ");
scanf("%d",&number);
while (number>start)
{
    temp=a;
    a=b;
    b=temp+a;
    start++;
}
    printf("Fibonachi series of %d term is %d\n",number,a);


return 0;
}