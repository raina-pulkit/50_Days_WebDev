import java.util.*;

public class weirdQuestion{
    public static void main(String[] args) {
        new Solution();
    }
}

class Solution{
    Scanner s = new Scanner(System.in);
    Solution(){
        System.out.print("Enter number of items: ");
        int n = s.nextInt();
        int[] a = new int[n];
        int[] b = new int[n];

        for(int i = 0; i<n; i++)
            a[i] = s.nextInt();
        for(int i = 0; i<n; i++)
            b[i] = s.nextInt();
        
        patternRepeater(a, b, n);
    }

    private void patternRepeater(int[] a, int[] b, int n){
        int[] temp = new int[n];      
        Arrays.sort(b);
        int[] signs = new int[n];

        for(int i = 1; i<n; i++)
            signs[i] = a[i]>a[i-1]?1:-1;


        int i = 0, j = n-1, k = 1;
        //Checking what to keep first, max or min element
        if(a[1] > a[0])
            temp[0] = b[i++];
        else
            temp[0] = b[j--];
        

        //check if there are continous signs and keep count of how many
        while(k<n){
            int count = 1;
            while(k<n-1 && signs[k]==signs[k+1]){
                count++;
                k++;
            }

            switch(signs[k]){
                case 1:
                    for(int tempIndex = count; tempIndex>0; tempIndex--){
                        temp[k-tempIndex+1] = b[j-tempIndex+1];
                    }
                    k++;
                    j -= count;
                    break;
                case -1:
                    for(int tempIndex = count; tempIndex>0; tempIndex--){
                        temp[k-tempIndex+1] = b[i+tempIndex-1];
                    }
                    k++;
                    i += count;
                    break;
                default:
                    ;
            }
        }

        int ans = 0;
        for(int p = 0; p<n; p++){
            System.out.print(temp[p] + " ");
            if(p == 0)
                continue;
            ans += Math.abs(temp[p]-temp[p-1]);
        }
        System.out.println("");
        System.out.println("Max answer = " + ans);
    }
}