#include<stdio.h>
int main(){
int year;
printf("enter Year  :");
scanf("%d",&year);
if (year%4==0)
{
    printf("%d is Leap Year",year);
}else{
    printf("%d is Non-Leap Year",year);
}

return 0;    
}