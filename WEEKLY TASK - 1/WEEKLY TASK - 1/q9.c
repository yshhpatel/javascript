#include<stdio.h>
int main(){
int num;
printf("Enter the number:");
scanf("%d",&num);
int sum=0 ,rem;
while (num!=0)
{
    rem = num%10;
    sum= sum+rem;
    num = num/10 ;
}
printf("Sum of Digits of the %d is : %d",num ,sum);
return 0;    
}