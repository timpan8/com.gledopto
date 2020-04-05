# Gledopto & Tint Bulbs and RGB Led Strip Controller (ZigBee)  
    
Control your Gledopto and Tint devices with Homey using ZigBee!   
   
### Changelog   
1.1.5
Fixt problem to add Gledopto WW+CW (GL-C-006) Controller

1.1.4  
Added more devices - Thx "matrover" for providing the pulls.  
GL-B-001Z, GL-B-008Z, GL-S-003Z, GL-S-007Z  
There are still issues with controlling white, this is waiting for the zigbee rewrite by Athom in HomeyCore OS.   
    
1.1.3  
fix bug #12 add Geldopto GL-C-008  

1.1.1  
fix bug #8 add Gledopto GU10  

1.1.0  
Added support for [Tint-lights](https://www.mueller-licht.de/produktserien/tint/) (color-bulbs and white-tint bulbs) with E27, E14 and GU10 sockets   
*sold by Aldi and Action among others*

1.0.2 
Added support for WW+CW LED Controllers (https://bit.ly/2PB3oA1)

1.0.1   
Added EndPoints so RGB and White can be controlled
     
1.0.0  
- Let's see if we can bring some color to the world. 
This is work in progress. Users have reported that the basics work.   
As soon as I'll receive my own, more will be added.




How to install:
1. Download Node.js 12.16.1 LTS  https://nodejs.org/en/

2. Start Cmd and run "npm install -g homey"

3. Then run "homey login" and login to you'r Homey Account

4. Download Repository and save on computer

5. Open repository location in Cmd. Type "cd C:\TempLocation\com.gledopto" in Cmd

6. To install app on homey type "homey app install" in Cmd. To just test the app type "homey app run", (it will be installed when closed)

7. If problem try "npm install homey-meshdriver" and "npm install homey-log"
