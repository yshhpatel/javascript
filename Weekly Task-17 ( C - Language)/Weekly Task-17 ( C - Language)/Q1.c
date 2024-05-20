#include<stdio.h>
arr_sum(int arr[],int len){
    int sum=0;
    for (int i = 0; i < len; i++)
    {
        /* code */
        sum+=arr[i];
    }
    printf("The sum = %d",sum);
    
}
main(){
    int len;
    printf("Ener the len: ");
    scanf("%d",&len);

    int arr[len];
    for (int i = 0; i < len; i++)
    {
        printf("arr[%d]: ",i);
        scanf("%d",&arr[i]);
    }
    
    arr_sum(arr,len);
}