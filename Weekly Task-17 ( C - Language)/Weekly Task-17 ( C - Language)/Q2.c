#include<stdio.h>
#include<string.h>
void str_len(char str[]){
    int length =0;
     for (int i = 0 ; str[i]!= NULL ; i++)
    {
        length++;
    }
    printf("Length is: %d",length);
    
}
void main()
{
    char str[100];
    printf("Enter String Name:");
    scanf("%s",&str);
   
    str_len(str);
}