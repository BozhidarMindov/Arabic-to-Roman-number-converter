function convertToRoman(num) {
    let romanNumber = "";
   
    while (num >= 0)
    {
      if (num >= 1000)
      {
        romanNumber = romanNumber + "M";
        num = num - 1000;
      }
      else if (num >= 900)
      {
        romanNumber = romanNumber + "CM";
        num = num - 900;
      }
     
      else if (num >= 500)
      {
        romanNumber = romanNumber + "D";
        num = num - 500;
      }
      else if (num >= 400)
      {
        romanNumber = romanNumber + "CD";
        num = num - 400;
      }
     
       else if (num >= 100)
      {
        romanNumber = romanNumber + "C";
        num = num - 100;
      }
       else if (num >= 90)
      {
        romanNumber = romanNumber + "XC";
        num = num - 90;
      }
      else if (num >= 50)
      {
        romanNumber = romanNumber + "L";
        num = num - 50;
      }
      else if (num >= 40)
      {
        romanNumber = romanNumber + "XL";
        num = num - 40;
      }
      else if (num >= 10)
      {
        romanNumber = romanNumber + "X";
        num = num - 10;
      }
      else if (num >= 9)
      {
        romanNumber = romanNumber + "IX";
        num = num - 9;
      }
       else if (num >= 5)
      {
        romanNumber = romanNumber + "V";
        num = num - 5;
      }
      else if (num >= 4)
      {
        romanNumber = romanNumber + "IV";
        num = num - 4;
      }
      else if (num >= 1)
      {
        num = num - 1;
        romanNumber = romanNumber + "I";
      }
    }
    return romanNumber;
   }

   convertToRoman(51);
   