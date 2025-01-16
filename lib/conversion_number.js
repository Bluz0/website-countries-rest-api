export function number_to_good_writing(nb){

    let res = 0;

    if (nb >= 0 && nb < 10000){
        res = nb;
    }

    else if(nb >= 10000 && nb < 999999){ // 10 000 to 999 999
        res = Math.floor(nb/1000) + "," + (nb % 1000);

        if (Math.floor(nb % 1000) == 0){
            res = Math.floor(nb/1000) + ",000";
        }
        
        else if (Math.floor(nb % 1000) >= 10 && Math.floor(nb % 1000) < 100){
            res = Math.floor(nb/1000) + + ",0"+(nb % 1000);
        }

        else if(Math.floor(nb % 1000) >= 0 && Math.floor(nb%1000) < 10){
            res = Math.floor(nb/1000) + + ",00"+(nb % 1000);
        }

    }

    else if(nb >= 1000000 && nb < 9999999){ // 1 000 000
        res = Math.floor(nb/1000000) + "," + Math.floor((nb-(nb/1000000))/10000) + "," + (nb % 1000);
        if (Math.floor(nb % 1000) == 0){
            res = Math.floor(nb/1000000) + "," + Math.floor((nb-(nb/1000000))/10000) + ",000";
        }
        
        else if (Math.floor(nb % 1000) >= 10 && Math.floor(nb % 1000) < 100){
            res = Math.floor(nb/1000000) + "," + Math.floor((nb-(nb/1000000))/10000) + ",0"+(nb % 1000);
        }

        else if(Math.floor(nb % 1000) >= 0 && Math.floor(nb%1000) < 10){
            res = Math.floor(nb/1000000) + "," + Math.floor((nb-(nb/1000000))/10000) + ",00"+(nb % 1000);
        }
    }

    else if (nb >= 10000000 && nb < 99999999){ // 10 000 000
        res = Math.floor(nb/1000000) + "," + Math.floor((nb/1000)%1000) + "," + (nb % 1000);
        if (Math.floor(nb % 1000) == 0){
            res = Math.floor(nb/1000000) + "," + Math.floor((nb/1000)%1000) + ",000";
        }
        
        else if (Math.floor(nb % 1000) >= 10 && Math.floor(nb % 1000) < 100){
            res = Math.floor(nb/1000000) + "," + Math.floor((nb/1000)%1000) + ",0"+(nb % 1000);
        }

        else if(Math.floor(nb % 1000) >= 0 && Math.floor(nb%1000) < 10){
            res = Math.floor(nb/1000000) + "," + Math.floor((nb/1000)%1000) + ",00"+(nb % 1000);
        }
        
    }

    else if (nb >= 100000000 && nb < 999999999){ //273 523 621
        res = Math.floor(nb/1000000) + "," + Math.floor((nb/1000)%1000) + "," + Math.floor(((nb/10000000)*100000000)%1000);
    }

    else{ // TODO BILLION
        let res_billion = Math.floor(nb/1000000000);
        nb = Math.floor(nb - ((res_billion)*1000000000));
        res = res_billion +","+ Math.floor(nb/1000000) + "," + Math.floor((nb/1000)%1000) + "," + Math.floor(((nb/10000000)*100000000)%1000) ;
        
        if (Math.floor(((nb/10000000)*100000000)%1000) == 0){
            res = res_billion +","+ Math.floor(nb/1000000) + "," + Math.floor((nb/1000)%1000) + ",000";  
        }
        
        else if (Math.floor(((nb/10000000)*100000000)%1000) >= 10 && Math.floor(((nb/10000000)*100000000)%1000) < 100){
            res = res_billion +","+ Math.floor(nb/1000000) + "," + Math.floor((nb/1000)%1000) + ",0"+Math.floor(((nb/10000000)*100000000)%1000);  
        }

        else if(Math.floor(((nb/10000000)*100000000)%1000) >= 0 && Math.floor(((nb/10000000)*100000000)%1000) < 10){
            res = res_billion +","+ Math.floor(nb/1000000) + "," + Math.floor((nb/1000)%1000) + ",00"+Math.floor(((nb/10000000)*100000000)%1000);
        }
        
        else if (Math.floor(Math.floor((nb/1000)%1000)) >= 0 && Math.floor((nb/1000)%1000) < 10){
            res = res_billion +","+ Math.floor(nb/1000000) + ",00" + Math.floor((nb/1000)%1000) + "," + Math.floor(((nb/10000000)*100000000)%1000) ;
        }

        else{
            res = "Unknown Data";
        }
    }

    return res;

}