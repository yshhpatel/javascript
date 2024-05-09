#include<stdio.h>
int main(){
int a ,b ,c ;
printf("enter First number:");
scanf("%d",&a);
printf("enter Second number :");
scanf("%d",&b);
printf("enter Third number :");
scanf("%d",&c);

if (a>b)
{
    if (a>c)
    {
        printf("%d is Largest number",a);
    }else{
        printf("%d is Largest number",c);
    }
}else{
    if (b>c)
    {
        printf("%d is Largest number",b);
    }else{
    printf("%d is Largest number",c);
    }
    
}

return 0;    
}