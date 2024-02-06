import React, { useEffect, useRef } from "react";
import check from "../assets/lotties/loading.json";
import Lottie  from "lottie-react";

   

export const Loading = () => {

  
 
  
    
        const lottieRef = useRef<any>(null);
       
    
    
    
        return (
            <section className="loadingContainer" >
                <Lottie
                    animationData={check}
                    loop={true}
                    autoPlay={true}
                    lottieRef={lottieRef}
                 className="animation"
    
                />
            </section>
        );
    };
    
    