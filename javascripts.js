window.addEventListener("scroll", function() { loadSticky(), loadBanner()});

var newdate = new Date();
var datecreate = newdate.getDate()+'-'+(newdate.getMonth()+1)+'-'+newdate.getFullYear();
var timing = newdate.getHours()+'h: '+newdate.getMinutes()+'m: '+ newdate.getSeconds()+'s';
var status="Not process yet";

function product(productID, brand, img , name, price, amount,img2,imgct) {
    this.productID=productID;
    this.brand=brand;
    this.img=img;
    this.name=name;
    this.price=price;
    this.amount=amount;
    this.img2=img2;
    this.imgct=imgct;
}

function createProduct () {
    if(localStorage.getItem('products')===null)
    {
        var productList = [
            new product(10001, 'Asus' ,'Images/Products/Asus/TUF-series-gaming/A15 FA506IH - AL018T/Laptop ASUS TUF GAMING A15 FA506IH - AL018Thinh1.jpg','Laptop ASUS TUF GAMING A15 FA506IH - AL018',20490000,100,'Images/Products/Asus/TUF-series-gaming/A15 FA506IH - AL018T/Laptop ASUS TUF GAMING A15 FA506IH - AL018Thinh6.jpg','Images/Products/Asus/TUF-series-gaming/A15 FA506IH - AL018T/Laptop ASUS TUF GAMING A15 FA506IH - AL018Tct.jpg'),
            new product(10002, 'Asus' ,'Images/Products/Asus/TUF-series-gaming/A15 FA506IU AL127T/Laptop ASUS TUF Gaming A15 FA506IU AL127Thinh1.jpg', 'Laptop ASUS TUF Gaming A15 FA506IU AL127T', 25490000,100,'Images/Products/Asus/TUF-series-gaming/A15 FA506IU AL127TLaptop ASUS TUF Gaming A15 FA506IU AL127Thinh4.jpg','Images/Products/Asus/TUF-series-gaming/A15 FA506IU AL127Laptop ASUS TUF Gaming A15 FA506IU AL127Tct.jpg'),
            new product(10003, 'Asus' ,'Images/Products/Asus/TUF-series-gaming/A15 FA506IV - HN202T/Laptop ASUS TUF Gaming A15 FA506IV - HN202Thinh1.jpg', 'Laptop ASUS TUF Gaming A15 FA506IV - HN202T', 32990000,100,'Images/Products/Asus/TUF-series-gaming/A15 FA506IV - HN202T/Laptop-ASUS-TUF-Gaming-A15-FA506IV-HN202Thinh5.jpg','Images/Products/Asus/TUF-series-gaming/A15 FA506IV - HN202T/Laptop ASUS TUF Gaming A15 FA506IV - HN202Tct.jpg'),
            new product(10004, 'Asus' ,'Images/Products/Asus/TUF-series-gaming/FA506II AL012T/Laptop ASUS TUF Gaming FA506II AL012Thinh1.jpg', 'Laptop ASUS TUF Gaming FA506II AL012T', 21990000,100,'Images/Products/Asus/TUF-series-gaming/FA506II AL012T/Laptop ASUS TUF Gaming FA506II AL012Thinh4.jpg','Images/Products/Asus/TUF-series-gaming/FA506II AL012T/Laptop ASUS TUF Gaming FA506II AL012Tct.jpg'),
            new product(10005, 'Asus' ,'Images/Products/Asus/TUF-series-gaming/FA506II AL016T/Laptop ASUS TUF Gaming FA506II AL016Thinh1.jpg', 'Laptop ASUS TUF Gaming FA506II AL016T', 23990000,100,'Images/Products/Asus/TUF-series-gaming/FA506II AL016T/Laptop ASUS TUF Gaming FA506II AL016Thinh6.jpg','Images/Products/Asus/TUF-series-gaming/FA506II AL016T/Laptop ASUS TUF Gaming FA506II AL016Tct.jpg'),
            new product(10006, 'Asus' ,'Images/Products/Asus/TUF-series-gaming/FX505DT HN478T/Laptop gaming ASUS TUF FX505DT HN478Thinh1.jpg', 'Laptop gaming ASUS TUF FX505DT HN478T', 19290000,100,'Images/Products/Asus/TUF-series-gaming/FX505DT HN478T/Laptop gaming ASUS TUF FX505DT HN478Thinh5.jpg','Images/Products/Asus/TUF-series-gaming/FX505DT HN478T/Laptop gaming ASUS TUF FX505DT HN478Tct.jpg'),
            new product(10007, 'Asus' ,'Images/Products/Asus/TUF-series-gaming/FX505DT HN488T/Laptop gaming ASUS TUF FX505DT HN488Thinh1.jpg', 'Laptop gaming ASUS TUF FX505DT HN488T', 18290000,100,'Images/Products/Asus/TUF-series-gaming/FX505DT HN488T/Laptop gaming ASUS TUF FX505DT HN488Thinh5.jpg','Images/Products/Asus/TUF-series-gaming/FX505DT HN488T/Laptop gaming ASUS TUF FX505DT HN488Tct.jpg'),
            new product(10008, 'Asus' ,'Images/Products/Asus/ROG-series-gaming/G15 G512 IAL001T/Laptop Gaming Asus ROG Strix G15 G512 IAL001Thinh1.jpg', 'Laptop Gaming Asus ROG Strix G15 G512 IAL001T', 28990000,100,'Images/Products/Asus/ROG-series-gaming/G15 G512 IAL001T/Laptop Gaming Asus ROG Strix G15 G512 IAL001Thinh6.jpg','Images/Products/Asus/ROG-series-gaming/G15 G512 IAL001T/Laptop Gaming Asus ROG Strix G15 G512 IAL001Tct.jpg'),
            new product(10009, 'Asus' ,'Images/Products/Asus/ROG-series-gaming/G17 G712L UEV075T/Laptop Gaming Asus ROG Strix G17 G712L UEV075Thinh1.jpg', 'Laptop Gaming Asus ROG Strix G17 G712L UEV075T', 34990000,100,'Images/Products/Asus/ROG-series-gaming/G15 G512 IAL001T/Laptop Gaming Asus ROG Strix G15 G512 IAL001Thinh4.jpg','Images/Products/Asus/ROG-series-gaming/G15 G512 IAL001T/Laptop Gaming Asus ROG Strix G15 G512 IAL001Tct.jpg'),
            new product(10010, 'Asus' ,'Images/Products/Asus/ROG-series-gaming/G531GT HN553T/Laptop gaming ASUS ROG Strix G G531GT HN553Thinh1.jpg', 'Laptop gaming ASUS ROG Strix G G531GT HN553T', 22990000,100,'Images/Products/Asus/ROG-series-gaming/G531GT HN553T/Laptop gaming ASUS ROG Strix G G531GT HN553Thinh4.jpg','Images/Products/Asus/ROG-series-gaming/G531GT HN553T/Laptop gaming ASUS ROG Strix G G531GT HN553Tct.jpg'),
            new product(10011, 'Asus' ,'Images/Products/Asus/ROG-series-gaming/G532L VAZ044T/Laptop Gaming Asus ROG Strix SCAR 15 G532L VAZ044Thinh1.jpg', 'Laptop Gaming Asus ROG Strix SCAR 15 G532L VAZ044T', 47990000,100,'Images/Products/Asus/ROG-series-gaming/G532L VAZ044T/Laptop Gaming Asus ROG Strix SCAR 15 G532L VAZ044Thinh6.jpg,Images/Products/Asus/ROG-series-gaming/G532L VAZ044T/Laptop Gaming Asus ROG Strix SCAR 15 G532L VAZ044Tct.jpg'),
            new product(10012, 'Asus' ,'Images/Products/Asus/Zephyrus-series-gaming/15 GX550LXS HC055R/Laptop gaming ASUS ROG Zephyrus Duo 15 GX550LXS HC055Rhinh1.jpg', 'Laptop gaming ASUS ROG Zephyrus Duo 15 GX550LXS HC055R', 120000000,100,'Images/Products/Asus/Zephyrus-series-gaming/15 GX550LXS HC055R/Laptop gaming ASUS ROG Zephyrus Duo 15 GX550LXS HC055Rhinh6.jpg','Images/Products/Asus/Zephyrus-series-gaming/15 GX550LXS HC055R/Laptop gaming ASUS ROG Zephyrus Duo 15 GX550LXS HC055Rct.jpg'),
            new product(10013, 'Asus' ,'Images/Products/Asus/Zephyrus-series-gaming/G14 GA401IU HA171T/Laptop gaming ASUS ROG Zephyrus G14 GA401IU HA171Thinh1.jpg', 'Laptop gaming ASUS ROG Zephyrus G14 GA401IU HA171T', 39990000,100,'Images/Products/Asus/Zephyrus-series-gaming/G14 GA401IU HA171T/Laptop gaming ASUS ROG Zephyrus G14 GA401IU HA171Thinh6.jpg','Images/Products/Asus/Zephyrus-series-gaming/G14 GA401IU HA171T/Laptop gaming ASUS ROG Zephyrus G14 GA401IU HA171Tct.jpg'),
            new product(10014, 'Asus' ,'Images/Products/Asus/Zephyrus-series-gaming/GX701GXR H6072T/Laptop Gaming Asus ROG Zephyrus S GX701GXR H6072Thinh1.jpg', 'Laptop Gaming Asus ROG Zephyrus S GX701GXR H6072T', 79990000,100,'Images/Products/Asus/Zephyrus-series-gaming/GX701GXR H6072T/Laptop Gaming Asus ROG Zephyrus S GX701GXR H6072Thinh2.jpg','Images/Products/Asus/Zephyrus-series-gaming/GX701GXR H6072T/Laptop Gaming Asus ROG Zephyrus S GX701GXR H6072Tct.jpg'),
            new product(10015, 'Asus' ,'Images/Products/Asus/Zephyrus-series-gaming/GX701LXS HG038T/Laptop gaming Asus ROG Zephyrus S GX701LXS HG038Thinh1.jpg', 'Laptop gaming Asus ROG Zephyrus S GX701LXS HG038T', 84990000,100,'Images/Products/Asus/Zephyrus-series-gaming/GX701LXS HG038T/Laptop gaming Asus ROG Zephyrus S GX701LXS HG038Thinh2.jpg','Images/Products/Asus/Zephyrus-series-gaming/GX701LXS HG038T/Laptop gaming Asus ROG Zephyrus S GX701LXS HG038Tct.jpg'),
            new product(10016, 'Asus' ,'Images/Products/Asus/Zenbook-cao cấp/UX434FAC A6064T/Laptop Asus ZenBook UX434FAC A6064Thinh1.jpg', 'Laptop Asus ZenBook UX434FAC A6064T', 24490000,100,'Images/Products/Asus/Zenbook-cao cấp/UX434FAC A6064T/Laptop Asus ZenBook UX434FAC A6064Thinh4.jpg','Images/Products/Asus/Zenbook-cao cấp/UX434FAC A6064T/Laptop Asus ZenBook UX434FAC A6064Tct.jpg'),
            new product(10017, 'Asus' ,'Images/Products/Asus/Zenbook-cao cấp/UX481FL BM049T/Laptop ASUS ZenBook Duo UX481FL BM049Thinh1.jpg', 'Laptop ASUS ZenBook Duo UX481FL BM049T', 39990000,100,'Images/Products/Asus/Zenbook-cao cấp/UX434FAC A6064T/Laptop ASUS ZenBook Duo UX481FL BM049Thinh3.jpg','Images/Products/Asus/Zenbook-cao cấp/UX434FAC A6064T/Laptop ASUS ZenBook Duo UX481FL BM049Tct.jpg'),
            new product(10018, 'Asus' ,'Images/Products/Asus/ProArt-studio/W700G1T AV046T/Laptop ASUS ProArt Studiobook W700G1T AV046Thinh1.jpg', 'Laptop ASUS ProArt Studiobook W700G1T AV046T', 46990000,100,'Images/Products/Asus/ProArt-studio/W700G1T AV046T/Laptop ASUS ProArt Studiobook W700G1T AV046Thinh5.jpg','Images/Products/Asus/ProArt-studio/W700G1T AV046T/Laptop ASUS ProArt Studiobook W700G1T AV046Tct.jpg'),
            new product(10019, 'Asus' ,'Images/Products/Asus/Expertbook cao cấp/B9450FA BM0324T/Laptop ASUS ExpertBook B9450FA BM0324Thinh1.jpg', 'Laptop ASUS ExpertBook B9450FA BM0324T', 37990000,100,'Images/Products/Asus/Expertbook cao cấp/B9450FA BM0324T/Laptop ASUS ExpertBook B9450FA BM0324Thinh4.jpg','Images/Products/Asus/Expertbook cao cấp/B9450FA BM0324T/Laptop ASUS ExpertBook B9450FA BM0324Tct.jpg'),
            new product(10020, 'Asus' ,'Images/Products/Asus/Expertbook cao cấp/B9450FA BM0616R/Laptop ASUS ExpertBook B9450FA BM0616Rhinh1.jpg', 'Laptop ASUS ExpertBook B9450FA BM0616R', 49990000,100,'Images/Products/Asus/Expertbook cao cấp/B9450FA BM0616R/Laptop ASUS ExpertBook B9450FA BM0616Rhinh4.jpg','Images/Products/Asus/Expertbook cao cấp/B9450FA BM0616R/Laptop ASUS ExpertBook B9450FA BM0616Rct.jpg'),
            new product(10021, 'Asus' ,'Images/Products/Asus/Expertbook cao cấp/P1410CJA EK355T/Laptop ASUS Expertbook P1410CJA EK355Thinh1.jpg', 'Laptop ASUS Expertbook P1410CJA EK355T', 15790000,100,'Images/Products/Asus/Expertbook cao cấp/P1410CJA EK355T/Laptop ASUS Expertbook P1410CJA EK355Thinh4.jpg','Images/Products/Asus/Expertbook cao cấp/B9450FA BM0324T/Laptop ASUS Expertbook P1410CJA EK355Tct.jpg'),
            new product(10022, 'Asus' ,'Images/Products/Asus/Expertbook cao cấp/P2451FA EK0229T/Laptop ASUS ExpertBook P2451FA EK0229Thinh1.jpg', 'Laptop ASUS ExpertBook P2451FA EK0229T', 17990000,100,'Images/Products/Asus/Expertbook cao cấp/P2451FA EK0229T/Laptop ASUS ExpertBook P2451FA EK0229Thinh2.jpg','Images/Products/Asus/Expertbook cao cấp/B9450FA BM0324T/Laptop ASUS ExpertBook P2451FA EK0229Tct.jpg'),
            new product(10023, 'Asus' ,'Images/Products/Asus/Expertbook cao cấp/P2451FA EK0262R/Laptop ASUS ExpertBook P2451FA EK0262Rhinh1.jpg', 'Laptop ASUS ExpertBook P2451FA EK0262R', 24990000,100,'Images/Products/Asus/Expertbook cao cấp/P2451FA EK0262R/Laptop ASUS ExpertBook P2451FA EK0262Rhinh2.jpg','Images/Products/Asus/Expertbook cao cấp/P2451FA EK0262R/Laptop ASUS ExpertBook P2451FA EK0262Rct.jpg'),
            new product(10024, 'Asus' ,'Images/Products/Asus/Vivobook văn phòng/A412FA EK1187T/Laptop ASUS A412FA EK1187Thinh1.jpg', 'Laptop ASUS A412FA EK1187T', 11990000,100,'Images/Products/Asus/Vivobook văn phòng/A412FA EK1187T/Laptop ASUS A412FA EK1187Thinh3.jpg','Images/Products/Asus/Vivobook văn phòng/A412FA EK1187T/Laptop ASUS A412FA EK1187Tct.jpg'),
            new product(10025, 'Asus' ,'Images/Products/Asus/Vivobook văn phòng/S433EA EB100T/Laptop Asus VivoBook S14 S433EA EB100Thinh1.jpg', 'Laptop Asus VivoBook S14 S433EA EB100T', 18990000,100,'Images/Products/Asus/Vivobook văn phòng/S433EA EB100T/Laptop Asus VivoBook S14 S433EA EB100Thinh4.jpg','Images/Products/Asus/Vivobook văn phòng/S433EA EB100T/Laptop Asus VivoBook S14 S433EA EB100Tct.jpg'),
            new product(10026, 'Asus' ,'Images/Products/Asus/Vivobook văn phòng/S433EA EB101T/Laptop Asus VivoBook S14 S433EA EB101Thinh1.jpg', 'Laptop Asus VivoBook S14 S433EA EB101T', 18990000,100,'Images/Products/Asus/Vivobook văn phòng/S433EA EB101T/Laptop Asus VivoBook S14 S433EA EB101Thinh5.jpg','Images/Products/Asus/Vivobook văn phòng/S433EA EB101T/Laptop Asus VivoBook S14 S433EA EB101Tct.jpg'),
            new product(10027, 'Asus' ,'Images/Products/Asus/Vivobook văn phòng/X409JA EK283T/Laptop Asus Vivobook X409JA EK283Thinh1.jpg', 'Laptop Asus Vivobook X409JA EK283T', 10190000,100,'Images/Products/Asus/Vivobook văn phòng/X409JA EK283T/Laptop Asus Vivobook X409JA EK283Thinh2.jpg','Images/Products/Asus/Vivobook văn phòng/X409JA EK283T/Laptop Asus Vivobook X409JA EK283Tct.jpg'),
            new product(10028, 'Acer' ,'Images/Products/Acer/Aspire Serires- Văn phòng/Acer Aspire 3 A315 56 37DV/Laptop Acer Aspire 3 A315 56 37DV.jpg', 'Laptop Acer Aspire 3 A315 56 37DV', 10290000,100,'Images/Products/Acer/Aspire Serires- Văn phòng/Acer Aspire 3 A315 56 37DV/Laptop Acer Aspire 3 A315 56 37DV 4.jpg','Images/Products/Acer/Aspire Serires- Văn phòng/Acer Aspire 3 A315 56 37DV/Laptop Acer Aspire 3 A315 56 37DV ct.jpg'),
            new product(10029, 'Acer' ,'Images/Products/Acer/Aspire Serires- Văn phòng/Acer Aspire 3 A315 56 59XY/Laptop Acer Aspire 3 A315 56 59XY.jpg', 'Laptop Acer Aspire 3 A315 56 59XY', 11990000,100,'Images/Products/Acer/Aspire Serires- Văn phòng/Acer Aspire 3 A315 56 59XY/Laptop Acer Aspire 3 A315 56 59XY 2.jpg','Images/Products/Acer/Aspire Serires- Văn phòng/Acer Aspire 3 A315 56 59XY/Laptop Acer Aspire 3 A315 56 59XY ct.jpg'),
            new product(10030, 'Acer' ,'Images/Products/Acer/Aspire Serires- Văn phòng/Acer Aspire 5 A514 53 38GF/Laptop Acer Aspire 5 A514 53 38GF.jpg', 'Laptop Acer Aspire 5 A514 53 38GF', 14990000,100,'Images/Products/Acer/Aspire Serires- Văn phòng/Acer Aspire 5 A514 53 38GF/Laptop Acer Aspire 5 A514 53 38GF 3.jpg','Images/Products/Acer/Aspire Serires- Văn phòng/Acer Aspire 5 A514 53 38GF/Laptop Acer Aspire 5 A514 53 38GF ct.jpg'),
            new product(10031, 'Acer' ,'Images/Products/Acer/Aspire Serires- Văn phòng/Acer Aspire 5 A514 53 50JA/Laptop Acer Aspire 5 A514 53 50JA.jpg', 'Laptop Acer Aspire 5 A514 53 50JA', 15690000,100,'Images/Products/Acer/Aspire Serires- Văn phòng/Acer Aspire 5 A514 53 50JA/Laptop Acer Aspire 5 A514 53 50JA 6.jpg','Images/Products/Acer/Aspire Serires- Văn phòng/Acer Aspire 5 A514 53 50JA/Laptop Acer Aspire 5 A514 53 50JA ct.jpg'),
            new product(10032, 'Acer' ,'Images/Products/Acer/Aspire Serires- Văn phòng/Acer Aspire 5 A514 53 50P9/Laptop Acer Aspire 5 A514 53 50P9.jpg', 'Laptop Acer Aspire 5 A514 53 50P9', 16990000,100,'Images/Products/Acer/Aspire Serires- Văn phòng/Acer Aspire 5 A514 53 50P9/Laptop Acer Aspire 5 A514 53 50P9 4.jpg','Images/Products/Acer/Aspire Serires- Văn phòng/Acer Aspire 5 A514 53 50P9/Laptop Acer Aspire 5 A514 53 50P9 ct.jpg'),
            new product(10033, 'Acer' ,'Images/Products/Acer/Aspire Serires- Văn phòng/Acer Aspire 5 A514 54 39KU/Laptop Acer Aspire 5 A514 54 39KU.jpg', 'Laptop Acer Aspire 5 A514 54 39KU', 13490000,100,'Images/Products/Acer/Aspire Serires- Văn phòng/Acer Aspire 5 A514 54 39KU/Laptop Acer Aspire 5 A514 54 39KU 3.jpg','Images/Products/Acer/Aspire Serires- Văn phòng/Acer Aspire 5 A514 54 39KU/Laptop Acer Aspire 5 A514 54 39KU ct.jpg'),
            new product(10034, 'Acer' ,'Images/Products/Acer/Aspire Serires- Văn phòng/Acer Aspire 5 A515 55 37HD/Laptop Acer Aspire 5 A515 55 37HD.jpg', 'Laptop Acer Aspire 5 A515 55 37HD', 13190000,100,'Images/Products/Acer/Aspire Serires- Văn phòng/Acer Aspire 5 A515 55 37HD/Laptop Acer Aspire 5 A515 55 37HD 4.jpg','Images/Products/Acer/Aspire Serires- Văn phòng/Acer Aspire 5 A515 55 37HD/Laptop Acer Aspire 5 A515 55 37HD ct.jpg'),
            new product(10035, 'Acer' ,'Images/Products/Acer/Aspire Serires- Văn phòng/Acer Aspire 5 A515 55 55HG/Laptop Acer Aspire 5 A515 55 55HG.jpg', 'Laptop Acer Aspire 5 A515 55 55HG', 17190000,100,'Images/Products/Acer/Aspire Serires- Văn phòng/Acer Aspire 5 A515 55 55HG/Laptop Acer Aspire 5 A515 55 55HG 1.jpg','Images/Products/Acer/Aspire Serires- Văn phòng/Acer Aspire 5 A515 55 55HG/Laptop Acer Aspire 5 A515 55 55HG ct.jpg'),
            new product(10036, 'Acer' ,'Images/Products/Acer/Aspire Serires- Văn phòng/Acer Aspire 5 A515 55G 5633/Laptop Acer Aspire 5 A515 55G 5633.jpg', 'Laptop Acer Aspire 5 A515 55G 5633', 18690000,100,'Images/Products/Acer/Aspire Serires- Văn phòng/Acer Aspire 5 A515 55G 5633/Laptop Acer Aspire 5 A515 55G 5633 2.jpg','Images/Products/Acer/Aspire Serires- Văn phòng/Acer Aspire 5 A515 55G 5633/Laptop Acer Aspire 5 A515 55G 5633 ct.jpg'),
            new product(10037, 'Acer' ,'Images/Products/Acer/Aspire Serires- Văn phòng/Acer Aspire 7 A715 41G R150/Laptop gaming Acer Aspire 7 A715 41G R150.jpg', 'Laptop gaming Acer Aspire 7 A715 41G R150', 20990000,100,'Images/Products/Acer/Aspire Serires- Văn phòng/Acer Aspire 7 A715 41G R150/Laptop gaming Acer Aspire 7 A715 41G R150 3.jpg','Images/Products/Acer/Aspire Serires- Văn phòng/Acer Aspire 7 A715 41G R150/Laptop gaming Acer Aspire 7 A715 41G R150 ct.jpg'),
            new product(10038, 'Acer' ,'Images/Products/Acer/Aspire Serires- Văn phòng/Acer Aspire 7 A715 41G R282/Laptop gaming Acer Aspire 7 A715 41G R282.jpg', 'Laptop gaming Acer Aspire 7 A715 41G R282', 19990000,100,'Images/Products/Acer/Aspire Serires- Văn phòng/Acer Aspire 7 A715 41G R282/Laptop gaming Acer Aspire 7 A715 41G R282 2.jpg','Images/Products/Acer/Aspire Serires- Văn phòng/Acer Aspire 7 A715 41G R282/Laptop gaming Acer Aspire 7 A715 41G R282 ct.jpg'),
            new product(10039, 'Acer' ,'Images/Products/Acer/Helios Serires- Gaming/Acer Predator Helios 300 PH315-51/Acer Predator Helios 300 PH315-51.jpg', 'Acer Predator Helios 300 PH315-51', 34990000,100,'Images/Products/Acer/Helios Serires- Gaming/Acer Predator Helios 300 PH315-51/Acer Predator Helios 300 PH315-51 2.jpg','Images/Products/Acer/Helios Serires- Gaming/Acer Predator Helios 300 PH315-51/Acer Predator Helios 300 PH315-51 ct.jpg'),
            new product(10040, 'Acer' ,'Images/Products/Acer/Helios Serires- Gaming/ACER Predator Helios PH315 53 770L/Laptop Gaming ACER Predator Helios PH315 53 770L 1.jpg', 'Laptop Gaming ACER Predator Helios PH315 53 770L', 37390000,100,'Images/Products/Acer/Helios Serires- Gaming/ACER Predator Helios PH315 53 770L/Laptop Gaming ACER Predator Helios PH315 53 770L 4.jpg','Images/Products/Acer/Helios Serires- Gaming/ACER Predator Helios PH315 53 770L/Laptop Gaming ACER Predator Helios PH315 53 770L ct.jpg'),
            new product(10041, 'Acer' ,'Images/Products/Acer/Nitro Serires- Gaming/Nitro 5 2020 AN515-55 70AX/Laptop Gaming Acer Nitro 5 2020 AN515-55 70AX 1.jpg', 'Laptop Gaming Acer Nitro 5 2020 AN515-55 70AX', 29990000,100,'Images/Products/Acer/Nitro Serires- Gaming/Nitro 5 2020 AN515-55 70AX/Laptop Gaming Acer Nitro 5 2020 AN515-55 70AX 2.jpg','Images/Products/Acer/Nitro Serires- Gaming/Nitro 5 2020 AN515-55 70AX/Laptop Gaming Acer Nitro 5 2020 AN515-55 70AX ct.jpg'),
            new product(10042, 'Acer' ,'Images/Products/Acer/Nitro Serires- Gaming/Nitro 5 AN515 43 R4VJ/Laptop gaming Acer Nitro 5 AN515 43 R4VJ 1.jpg', 'Laptop gaming Acer Nitro 5 AN515 43 R4VJ', 20990000,100,'Images/Products/Acer/Nitro Serires- Gaming/Nitro 5 AN515 43 R4VJ/Laptop gaming Acer Nitro 5 AN515 43 R4VJ 2.jpg','Images/Products/Acer/Nitro Serires- Gaming/Nitro 5 AN515 43 R4VJ/Laptop gaming Acer Nitro 5 AN515 43 R4VJ ct.jpg'),
            new product(10043, 'Acer' ,'Images/Products/Acer/Nitro Serires- Gaming/Nitro 5 AN515 55 55E3/Laptop gaming Acer Nitro 5 AN515 55 55E3 1.jpg', 'Laptop gaming Acer Nitro 5 AN515 55 55E3', 31990000,100,'Images/Products/Acer/Nitro Serires- Gaming/Nitro 5 AN515 55 55E3/Laptop gaming Acer Nitro 5 AN515 55 55E3 2.jpg','Images/Products/Acer/Nitro Serires- Gaming/Nitro 5 AN515 55 55E3/Laptop gaming Acer Nitro 5 AN515 55 55E3 ct.jpg'),
            new product(10044, 'Acer' ,'Images/Products/Acer/Nitro Serires- Gaming/Nitro 5 AN515 55 77P9/Laptop gaming Acer Nitro 5 AN515 55 77P9.jpg', 'Laptop gaming Acer Nitro 5 AN515 55 77P9', 28990000,100,'Images/Products/Acer/Nitro Serires- Gaming/Nitro 5 AN515 55 77P9/Laptop gaming Acer Nitro 5 AN515 55 77P9 3.jpg','Images/Products/Acer/Nitro Serires- Gaming/Nitro 5 AN515 55 77P9/Laptop gaming Acer Nitro 5 AN515 55 77P9 ct.jpg'),
            new product(10045, 'Acer' ,'Images/Products/Acer/Nitro Serires- Gaming/Nitro 5 AN515 55 5923/Acer Nitro 5 AN515 55 5923 1.jpg', 'Laptop gaming Acer Nitro 5 AN515 43 R4VJ', 23990000,100,'Images/Products/Acer/Nitro Serires- Gaming/Nitro 5 AN515 55 5923/Acer Nitro 5 AN515 55 5923 2.jpg','Images/Products/Acer/Nitro Serires- Gaming/Nitro 5 AN515 55 5923/Acer Nitro 5 AN515 55 5923 ct.jpg'),
            new product(10046, 'Acer' ,'Images/Products/Acer/Swift Series- Cao cấp/Acer Swift 3 SF314-57G 53T1/Laptop Acer Swift 3 SF314-57G 53T1.jpg', 'Laptop Acer Swift 3 SF314-57G 53T1', 20190000,100,'Images/Products/Acer/Swift Series- Cao cấp/Acer Swift 3 SF314-57G 53T1/Laptop Acer Swift 3 SF314-57G 53T1 2.jpg','Images/Products/Acer/Swift Series- Cao cấp/Acer Swift 3 SF314-57G 53T1/Laptop Acer Swift 3 SF314-57G 53T1 ct.jpg'),
            new product(10047, 'Acer' ,'Images/Products/Acer/Swift Series- Cao cấp/Acer Swift 3 SF314-58 39BZ/Laptop Acer Swift 3 SF314-58 39BZ 1.jpg', 'Laptop Acer Swift 3 SF314-58 39BZ', 14990000,100,'Images/Products/Acer/Swift Series- Cao cấp/Acer Swift 3 SF314-58 39BZ/Laptop Acer Swift 3 SF314-58 39BZ 4.jpg','Images/Products/Acer/Swift Series- Cao cấp/Acer Swift 3 SF314-58 39BZ/Laptop Acer Swift 3 SF314-58 39BZ ct.jpg'),
            new product(10048, 'Acer' ,'Images/Products/Acer/Swift Series- Cao cấp/Acer Swift 3 SF314-58 55RJ/Laptop Acer Swift 3 SF314-58 55RJ .jpg', 'Laptop Acer Swift 3 SF314-58 55RJ', 14990000,100,'Images/Products/Acer/Swift Series- Cao cấp/Acer Swift 3 SF314-58 55RJ/Laptop Acer Swift 3 SF314-58 55RJ 3.jpg','Images/Products/Acer/Swift Series- Cao cấp/Acer Swift 3 SF314-58 55RJ/Laptop Acer Swift 3 SF314-58 55RJ ct.jpg'),
            new product(10049, 'Acer' ,'Images/Products/Acer/Swift Series- Cao cấp/ACER Swift 5 SF514 54T 793C/Laptop ACER Swift 5 SF514 54T 793C.jpg', 'Laptop ACER Swift 5 SF514 54T 793C', 29990000,100,'Images/Products/Acer/Swift Series- Cao cấp/ACER Swift 5 SF514 54T 793C/Laptop ACER Swift 5 SF514 54T 793C 5.jpg','Images/Products/Acer/Swift Series- Cao cấp/ACER Swift 5 SF514 54T 793C/Laptop ACER Swift 5 SF514 54T 793C ct.jpg'),
            new product(10050, 'Acer' ,'Images/Products/Acer/Triton Series- Gaming/Predator Triton 500 PT515-52 72U2/Laptop Gaming Acer Predator Triton 500 PT515-52 72U2 1.jpg', 'Laptop Gaming Acer Predator Triton 500 PT515-52 72U2', 79990000,100,'Images/Products/Acer/Triton Series- Gaming/Predator Triton 500 PT515-52 72U2/Laptop Gaming Acer Predator Triton 500 PT515-52 72U2 2.jpg','Images/Products/Acer/Triton Series- Gaming/Predator Triton 500 PT515-52 72U2/Laptop Gaming Acer Predator Triton 500 PT515-52 72U2 ct.jpg'),
            new product(10051, 'Acer' ,'Images/Products/Acer/Triton Series- Gaming/Predator Triton 500 PT515-52 78PN/Laptop Gaming Acer Predator Triton 500 PT515-52 78PN 1.jpg', 'Laptop Gaming Acer Predator Triton 500 PT515-52 78PN', 69990000,100,'Images/Products/Acer/Triton Series- Gaming/Predator Triton 500 PT515-52 78PN/Laptop Gaming Acer Predator Triton 500 PT515-52 78PN 2.jpg','Images/Products/Acer/Triton Series- Gaming/Predator Triton 500 PT515-52 78PN/Laptop Gaming Acer Predator Triton 500 PT515-52 78PN ct.jpg'),
            new product(10052, 'Acer' ,'Images/Products/Acer/Triton Series- Gaming/Predator Triton 900/Acer Predator Triton 900.jpg', 'Acer Predator Triton 900', 62990000,100,'Images/Products/Acer/Triton Series- Gaming/Predator Triton 900/Acer Predator Triton 900 5.jpg','Images/Products/Acer/Triton Series- Gaming/Predator Triton 900/Acer Predator Triton 900 ct.jpg'),
            new product(10053, 'Dell' ,'Images/Products/Dell/Inspiron Series/13 7391 7391-N3TI5008W/13 7391 7391-N3TI5008Wpic1.jpg', 'Laptop Dell Inspiron 13 7391 7391-N3TI5008W', 26490000,100,'Images/Products/Dell/Inspiron Series/13 7391 7391-N3TI5008W/13 7391 7391-N3TI5008Wpic5.jpg','Images/Products/Dell/Inspiron Series/13 7391 7391-N3TI5008W/13 7391 7391-N3TI5008Wct.jpg'),
            new product(10054, 'Dell' ,'Images/Products/Dell/Inspiron Series/15 3593-N3593C/15 3593-N3593Cpic1.jpg', 'Laptop Dell Inspiron 15 3593-N3593C', 11090000,100,'Images/Products/Dell/Inspiron Series/15 3593-N3593C/15 3593-N3593Cpic4.jpg','Images/Products/Dell/Inspiron Series/15 3593-N3593C/15 3593-N3593Cct.jpg'),
            new product(10055, 'Dell' ,'Images/Products/Dell/Inspiron Series/15 5593 5593-70196703/15 5593 5593-70196703pic1.jpg', 'Laptop Dell Inspiron 15 5593 5593-70196703', 12990000,100,'Images/Products/Dell/Inspiron Series/15 5593 5593-70196703/15 5593 5593-70196703pic3.jpg','Images/Products/Dell/Inspiron Series/15 5593 5593-70196703/15 5593 5593-70196703ct.jpg'),
            new product(10056, 'Dell' ,'Images/Products/Dell/Inspiron Series/15 5593 5593-N5I5461W/15 5593 5593-N5I5461Wpic1.jpg', 'Laptop Dell Inspiron 15 5593 5593-N5I5461W', 19490000,100,'Images/Products/Dell/Inspiron Series/15 5593 5593-N5I5461W/15 5593 5593-N5I5461Wpic3.jpg','Images/Products/Dell/Inspiron Series/15 5593 5593-N5I5461W/15 5593 5593-N5I5461Wct.jpg'),
            new product(10057, 'Dell' ,'Images/Products/Dell/Inspiron Series/15 5593 N5593A-P90F002N93A/15 5593 N5593A-P90F002N93Apic1.jpg', 'Laptop Dell Inspiron 15 5593 N5593A-P90F002N93A', 24990000,100,'Images/Products/Dell/Inspiron Series/15 5593 N5593A-P90F002N93A/15 5593 N5593A-P90F002N93Apic2.jpg','Images/Products/Dell/Inspiron Series/15 5593 N5593A-P90F002N93A/15 5593 N5593A-P90F002N93Act.jpg'),
            new product(10058, 'Dell' ,'Images/Products/Dell/Inspiron Series/15 7501 X3MRY1/15 7501 X3MRY1pic1.jpg', 'Laptop Dell Inspiron 15 7501 X3MRY1', 30490000,100,'Images/Products/Dell/Inspiron Series/15 7501 X3MRY1/15 7501 X3MRY1pic5.jpg','Images/Products/Dell/Inspiron Series/15 7501 X3MRY1/15 7501 X3MRY1ct.jpg'),
            new product(10059, 'Dell' ,'Images/Products/Dell/Inspiron Series/5570-M5I5413W/5570-M5I5413Wpic1.jpg', 'Laptop Dell Inspiron 5570-M5I5413W', 22490000,100,'Images/Products/Dell/Inspiron Series/5570-M5I5413W/5570-M5I5413Wpic5.jpg','Images/Products/Dell/Inspiron Series/5570-M5I5413W/5570-M5I5413Wct.jpg'),
            new product(10060, 'Dell' ,'Images/Products/Dell/Inspiron Series/5584-N5I5413W/5584-N5I5413Wpic1.jpg', 'Laptop Dell Inspiron 5584-N5I5413W', 21890000,100,'Images/Products/Dell/Inspiron Series/5584-N5I5413W/5584-N5I5413Wpic2.jpg','Images/Products/Dell/Inspiron Series/5584-N5I5413W/5584-N5I5413Wct.jpg'),
            new product(10061, 'Dell' ,'Images/Products/Dell/Inspiron Series/7373-TI501OW/7373-TI501OWpic1.jpg', 'Laptop Dell Inspiron 7373-TI501OW', 27190000,100,'Images/Products/Dell/Inspiron Series/7373-TI501OW/7373-TI501OWpic3jpg','Images/Products/Dell/Inspiron Series/7373-TI501OW/7373-TI501OWct.jpg'),
            new product(10062, 'Dell' ,'Images/Products/Dell/Inspiron Series/7591-N5I5591W/7591-N5I5591Wpic1.jpg', 'Laptop Dell Inspiron 7591-N5I5591W', 25490000,100,'Images/Products/Dell/Inspiron Series/7591-N5I5591W/7591-N5I5591Wpic2.jpg','Images/Products/Dell/Inspiron Series/7591-N5I5591W/7591-N5I5591Wct.jpg'),
            new product(10063, 'Dell' ,'Images/Products/Dell/Vostro Series/14 3490-70211829/14 3490-70211829pic1.jpg', 'Laptop Dell Vostro 14 3490-70211829', 10990000,100,'Images/Products/Dell/Vostro Series/14 3490-70211829/14 3490-70211829pic3.jpg','Images/Products/Dell/Vostro Series/14 3490-70211829/14 3490-70211829picct.jpg'),
            new product(10064, 'Dell' ,'Images/Products/Dell/Vostro Series/15 3590-GRMGK1/15 3590-GRMGK1pic1.jpg', 'Laptop Dell Vostro 15 3590-GRMGK1', 14590000,100,'Images/Products/Dell/Vostro Series/15 3590-GRMGK1/15 3590-GRMGK1pic3.jpg','Images/Products/Dell/Vostro Series/15 3590-GRMGK1/15 3590-GRMGK1picct.jpg'),
            new product(10065, 'Dell' ,'Images/Products/Dell/Vostro Series/3578-V3578B/3578-V3578Bpic1.jpg', 'Laptop Dell Vostro 3578-V3578B', 17190000,100,'Images/Products/Dell/Vostro Series/3578-V3578B/3578-V3578Bpic5.jpg','Images/Products/Dell/Vostro Series/3578-V3578B/3578-V3578Bpicct.jpg'),
            new product(10066, 'Dell' ,'Images/Products/Dell/Vostro Series/5471-70146452/5471-70146452pic1.jpg', 'Laptop Dell Vostro 5471-70146452', 25690000,100,'Images/Products/Dell/Vostro Series/5471-70146452/5471-70146452pic5.jpg','Images/Products/Dell/Vostro Series/5471-70146452/5471-70146452picct.jpg'),
            new product(10067, 'Dell' ,'Images/Products/Dell/Vostro Series/5481-V4I5229W/5481-V4I5229Wpic1.jpg', 'Laptop Dell Vostro 5481-V4I5229W', 18490000,100,'Images/Products/Dell/Vostro Series/5481-V4I5229W/5481-V4I5229Wpic3.jpg','Images/Products/Dell/Vostro Series/5481-V4I5229W/5481-V4I5229Wpicct.jpg'),
            new product(10068, 'Dell' ,'Images/Products/Dell/Vostro Series/5481-V5481A/5481-V5481Apic1.jpg', 'Laptop Dell Vostro 5481-V5481A', 20490000,100,'Images/Products/Dell/Vostro Series/5481-V5481A/5481-V5481Apic7.jpg','Images/Products/Dell/Vostro Series/5481-V5481A/5481-V5481Apicct.jpg'),
            new product(10069, 'Dell' ,'Images/Products/Dell/Vostro Series/5568-077M512/5568-077M512pic1.jpg', 'Laptop Dell Vostro 5568-077M512', 14590000,100,'Images/Products/Dell/Vostro Series/5568-077M512/5568-077M512pic2.jpg','Images/Products/Dell/Vostro Series/5568-077M512/5568-077M512picct.jpg'),
            new product(10070, 'Dell' ,'Images/Products/Dell/Vostro Series/5581-70175952/5581-70175952pic1.jpg', 'Laptop Dell Vostro 5581-70175952', 18000000,100,'Images/Products/Dell/Vostro Series/5581-70175952/5581-70175952pic3.jpg','Images/Products/Dell/Vostro Series/5581-70175952/5581-70175952picct.jpg'),
            new product(10071, 'Dell' ,'Images/Products/Dell/XPS Series/13 9300 0N90H1/13 9300 0N90H1pic1.jpg', 'Laptop Dell XPS13 9300 0N90H1', 59990000,100,'Images/Products/Dell/XPS Series/13 9300 0N90H1/13 9300 0N90H1pic6.jpg','Images/Products/Dell/XPS Series/13 9300 0N90H1/13 9300 0N90H1picct.jpg'),
            new product(10072, 'Dell' ,'Images/Products/Dell/XPS Series/13 9365-K7DWW2/13 9365-K7DWW2pic1.jpg', 'Laptop Dell XPS 13 9365-K7DWW2', 41000000,100,'Images/Products/Dell/XPS Series/13 9365-K7DWW2/13 9365-K7DWW2pic4.jpg','Images/Products/Dell/XPS Series/13 9365-K7DWW2/13 9365-K7DWW2picct.jpg'),
            new product(10073,'Apple','Images/Products/Apple/Macbook Series/Macbook Air Series/2018 MRE82/2018 MRE82pic1.jpg','Apple Macbook Air 2018 MRE82',31900000,100,'Images/Products/Apple/Macbook Series/Macbook Air Series/2018 MRE82/2018 MRE82pic3.jpg','Images/Products/Apple/Macbook Series/Macbook Air Series/2018 MRE82/2018 MRE82ct.jpg'),
            new product(10074,'Apple','Images/Products/Apple/Macbook Series/Macbook Air Series/2018 MREE2/2018 MREE2pic1.jpg','Apple Macbook Air 2018 MREE2',31900000,100,'Images/Products/Apple/Macbook Series/Macbook Air Series/2018 MREE2/2018 MREE2pic2.jpg','Images/Products/Apple/Macbook Series/Macbook Air Series/2018 MREE2/2018 MREE2ct.jpg'),
            new product(10075,'Apple','Images/Products/Apple/Macbook Series/Macbook Air Series/2018 MREA2/2018 MREA2pic1.jpg','Apple Mabook Air 2018 MREA2',31900000,100,'Images/Products/Apple/Macbook Series/Macbook Air Series/2018 MREA2/2018 MREA2pic2.jpg','Images/Products/Apple/Macbook Series/Macbook Air Series/2018 MREA2/2018 MREA2ct.jpg'),
            new product(10076,'Apple','Images/Products/Apple/Macbook Series/Macbook Air Series/2019 MVFL2SA_A/2019 MVFL2SA_Apic1.jpg','Apple Macbook Air /2019 MVFL2SA_A',36990000,100,'Images/Products/Apple/Macbook Series/Macbook Air Series/2019 MVFL2SA_A/2019 MVFL2SA_Apic3.jpg','Images/Products/Apple/Macbook Series/Macbook Air Series/2019 MVFL2SA_A/2019 MVFL2SA_Apicct.jpg'),
            //new product(10077,'Apple','Images/Products/Apple/Macbook Series/Macbook Air Series/2019 MVFM2SA_A/2019 MVFN2SA_Apic1.jpg','Apple Macbook Air 2018',31990000,100,'Images/Products/Apple/Macbook Series/Macbook Air Series/2019 MVFM2SA_A/2019 MVFM2SA_Apic3.jpg','Images/Products/Apple/Macbook Series/Macbook Air Series/2019 MVFM2SA_A/2019 MVFM2SA_Apicct.jpg'),
            //new product(10078,'Apple','Images/Products/Apple/Macbook Series/Macbook Air Series/2019 MVFN2SA_A/2020 MVH22SA_Apic1.jpg','Apple Macbook Air 2018',36990000,100,'Images/Products/Apple/Macbook Series/Macbook Air Series/2019 MVFN2SA_A/2020 MVH22SA_Apic4.jpg','Images/Products/Apple/Macbook Series/Macbook Air Series/2020 MVH22SA_Apicct.jpg'),
            //new product(10079,'Apple','Images/Products/Apple/Macbook Series/Macbook Air Series/2020 MVH22SA_A2020 MVH42SA_Apic1.jpg','Apple Macbook Air 2018',34990000,100,'Images/Products/Apple/Macbook Series/Macbook Air Series/2020 MVH22SA_A2020 MVH42SA_Apic3.jpg','Images/Products/Apple/Macbook Series/Macbook Air Series/2020 MVH22SA_A2020 MVH42SA_Apicct.jpg'),
            new product(10080,'Apple','Images/Products/Apple/Macbook Series/Macbook Air Series/2020 MVH42SA_A/2020 MVH42SA_Apic1.jpg','Apple Macbook Air 2020 MVH42SA_A',35900000,100,'Images/Products/Apple/Macbook Series/Macbook Air Series/2020 MVH42SA_A/2020 MVH42SA_Apic3.jpg','Images/Products/Apple/Macbook Series/Macbook Air Series/2020 MVH42SA_A/2020 MVH42SA_Apicct.jpg'),
            new product(10081,'Apple','Images/Products/Apple/Macbook Series/Macbook Air Series/2020 MVH52SA_A/2020 MVH52SA_Apic1.jpg','Apple Macbook Air 2020 MVH52SA_A',35900000,100,'Images/Products/Apple/Macbook Series/Macbook Air Series/2020 MVH52SA_A/2020 MVH52SA_Apic4.jpg','Images/Products/Apple/Macbook Series/Macbook Air Series/2020 MVH52SA_A/2020 MVH52SA_Apic1ct.jpg'),
            new product(10082,'Apple','Images/Products/Apple/Macbook Series/Macbook Air Series/2020 MWTJ2SA_A/2020 MWTJ2SA_Apic1.jpg','Apple Macbook Air 2020 MWTJ2SA_A',28990000,100,'Images/Products/Apple/Macbook Series/Macbook Air Series/2020 MWTJ2SA_A/2020 MWTJ2SA_Apic4.jpg','Images/Products/Apple/Macbook Series/Macbook Air Series/2020 MWTJ2SA_A/2020 MWTJ2SA_Apicct.jpg'),
            new product(10083,'Apple','Images/Products/Apple/Macbook Series/Macbook Air Series/2020 MWTK2SA_A/2020 MWTK2SA_Apic1.jpg','Apple Macbook Air 2020 MWTK2SA_A',28990000,100,'Images/Products/Apple/Macbook Series/Macbook Air Series/2020 MWTK2SA_A/2020 MWTK2SA_Apic3.jpg','Images/Products/Apple/Macbook Series/Macbook Air Series/2020 MWTK2SA_A/2020 MWTK2SA_Apicct.jpg'),
            new product(10084,'Apple','Images/Products/Apple/Macbook Series/Macbook Air Series/2020 MWTL2SA_A/2020 MWTL2SA_Apic1.jpg','Apple Macbook Air 2020 MWTL2SA_A',31900000,100,'Images/Products/Apple/Macbook Series/Macbook Air Series/2020 MWTL2SA_A/2020 MWTL2SA_Apic4.jpg','Images/Products/Apple/Macbook Series/Macbook Air Series/2020 MWTL2SA_A/2020 MWTL2SA_Apicct.jpg'),
        ];
        localStorage.setItem('products',JSON.stringify(productList));        
    }
}

function createUser()
{
    if(localStorage.getItem('users')===null)
    {
        var userArray=[
            {username:'giaduc', password:'admin', fullname:'Gia Đức', address:'273 An Dương Vương, P3, Quận 5, TPHCM', phone:'0987654321' , created_date:datecreate, power:'ADMIN'},
            {username:'baoluan', password:'admin', fullname:'Bảo Luân', address:'273 An Dương Vương, P3, Quận 5, TPHCM', phone:'0987654321' , created_date:datecreate, power:'ADMIN'},
            {username:'trunghau', password:'admin', fullname:'Trung Hậu', address:'273 An Dương Vương, P3, Quận 5, TPHCM', phone:'0987654321' , created_date:datecreate, power:'ADMIN'},
            {username:'kimluong', password:'admin', fullname:'Kim Lương', address:'273 An Dương Vương, P3, Quận 5, TPHCM', phone:'0987654321' , created_date:datecreate, power:'ADMIN'}
        ];
        localStorage.setItem('users',JSON.stringify(userArray));        
    }
}


function cart() {
    if(localStorage.getItem('userlogin')===null)
    {
        showLogin();
    }
    else
    {
        window.location.replace("Cart.html");
    }
}

function list() {
    if(localStorage.getItem('userlogin')===null)
    {
        showLogin();
        document.getElementById('Watchbill').style.display='none';
    }
}

document.getElementById('registerForm').addEventListener('submit', register);
document.getElementById('loginForm').addEventListener('submit', login);

function register(newuser) {
    newuser.preventDefault();
    var fullname  = document.getElementById('Reg-fullname');
    var number    = document.getElementById('Reg-number');
    var address   = document.getElementById('Reg-address');
    var username  = document.getElementById('Reg-username');
    var userpass  = document.getElementById('Reg-password');
    var usercpass = document.getElementById('Reg-confirmpassword');
    var check=true;
    if(!usercpass.value)
    {
        document.getElementById('wcpassword').style.display='block';
        usercpass.focus();
        check=false;
    }
    else
    {
        if(usercpass.value != userpass.value)
        {
            document.getElementById('wcpassword').style.display='block';
            document.getElementById('wcpassword').innerHTML='The password does not match';
            usercpass.focus();
            check=false;
        }
        else
        {
            document.getElementById('wcpassword').style.display='none';
        }
    }

    if(!userpass.value)
    {
        document.getElementById('wpassword').style.display='block';
        userpass.focus();
        check=false;
    }
    else 
    {
        if (userpass.value.length<8)
        {
            document.getElementById('wpassword').style.display='block';
            document.getElementById('wpassword').innerHTML='Password must be 8 characters or more';
            check=false;
        }
        else
        {
            document.getElementById('wpassword').style.display='none';
        }
    }

    if(!address.value)
    {
        document.getElementById('waddress').style.display='block';
        address.focus();
        check=false;
    }
    else { document.getElementById('waddress').style.display='none'; }

    if(!username.value)
    {
        document.getElementById('wusernamenew').style.display='block';
        username.focus();
        check=false;
    }
    else { document.getElementById('wusernamenew').style.display='none'; }

    if(!number.value)
    {
        document.getElementById('wnumber').style.display='block';
        number.focus();
        check=false;
    }
    else
    {
        if(isNaN(Number(number.value)))
        {
            document.getElementById('wnumber').style.display='block';
            document.getElementById('wnumber').innerHTML='Invalid phone number';
            number.focus();
            check=false;
        }
        else
        {
            if(Number(number.value) < 100000000 || Number(number.value)>999999999)
            {
                document.getElementById('wnumber').style.display='block';
                document.getElementById('wnumber').innerHTML='Invalid phone number';
                number.focus();
                check=false;
            }
            else
            {
                document.getElementById('wnumber').style.display='none';
            }
        }
    }

    if (!fullname.value)
    {
        document.getElementById('wname').style.display='block';
        fullname.focus();
        check=false;
    }
    else { document.getElementById('wname').style.display='none'; }
    if(check==false)
    {
        return false;
    }

    var newdate = new Date();
	var datecreate = newdate.getDate()+'-'+(newdate.getMonth()+1)+'-'+newdate.getFullYear();
	var user = {username: username.value, password: userpass.value, fullname: fullname.value, address: address.value, phone: number.value , created_date: datecreate, power:'MEMBER'};
	var userArray = JSON.parse(localStorage.getItem('users'));
    for(var i=0;i<userArray.length;i++)
    {
        if(user.username==userArray[i].username)
        {
			document.getElementById('wusernamenew').style.display = 'block';
			document.getElementById('wusernamenew').innerHTML = 'Username already exists';
			username.focus();
			return false;
		}
	}
	userArray.push(user);
	localStorage.setItem('users',JSON.stringify(userArray));
    swal({
        title: 'Done!',
        text: 'You have successfully registered!',
        icon: 'success',
        button: 'Login',
      }).then ( function() { showLogin() });
}
 
function showSearch () {
  var x= document.getElementById('SEARCH');
  x.style.display='block';
  x.focus();
  document.getElementById('btn').style.display='block';
  var s='<i class="fa fa-times" style="font-size:25px;border-bottom:none" onclick="closesearch()"></i>';
  document.getElementById('SICON').innerHTML=s;
}   

function closesearch() {
  document.getElementById('SEARCH').style.display='none';
  document.getElementById('btn').style.display='none';
  var s='<i class="fa fa-search" onclick="showSearch()"></i>';
  document.getElementById('SICON').innerHTML=s;
}

function login(newuser){
	newuser.preventDefault();
	var username = document.getElementById('Log-username').value;
	var password = document.getElementById('Log-password').value;
	var check=true;
    if(!username)
    {
        document.getElementById('wusername').style.display = 'block';
        check = false;
    }
    else {
		document.getElementById('wusername').style.display = 'none';
    }
    
    if(!password)
    {
        document.getElementById('wupassword').style.display = 'block';
		check = false;
    }
    else 
    {
		document.getElementById('wupassword').style.display = 'none';
    }
    
    if(check==false)
    {
		return false;
    }
    
	var userArray = JSON.parse(localStorage.getItem('users'));
	for(var i=0;i<userArray.length;i++){
		if(username==userArray[i].username){
			if(password==userArray[i].password){
				closeForm();
                localStorage.setItem('userlogin',JSON.stringify(userArray[i]));
                window.location.reload(true);
                alert("Welcome, "+username);
                return true;
			}
		}
	}
	document.getElementById('wupassword').style.display = 'block';
	document.getElementById('wupassword').innerHTML = 'Sai thông tin đăng nhập';
	return false;
}

function logout(){
    var i=JSON.parse(localStorage.getItem('userlogin'));
    alert("You have successfully logged out.\nGoodbye, "+ i.username);
    localStorage.removeItem('userlogin');
    localStorage.removeItem('cart');
    window.location.href = 'Index.html'; 
}

function checklogin(){
	if(localStorage.getItem('userlogin')!=null) {
        var user = JSON.parse(localStorage.getItem('userlogin'));
        var x="'"+user.username+"'";
        var namelog='';
        if(user.power=='ADMIN'){
            namelog =   '<li onclick="showaccount('+x+')">'+user.fullname+'</li>'
                    +   '<li><a href="Admin.html" class="dashbroad">Dashbroad</a></li>'
                    +   '<li onclick="logout()">Logout</li>'
        }
        else {
            namelog =   '<li onclick="showaccount('+x+')">'+user.fullname+'</li>'
                    +   '<li onclick="logout()">Logout</li>'
        }
        document.querySelector('div#bot .botnav .botnavright ul li.usericon ul').innerHTML = namelog;
    }
}

/*NEW*/
function showaccount(o) {
    var user=JSON.parse(localStorage.getItem('users'));
    var x="";
    for(var i=0;i<user.length;i++)
    {
        if(o==user[i].username)
        {
            var a=user[i].username;
            var b=user[i].address;
            var c=user[i].phone;
            for(d= 0;d<user[i].password.length;d++)
            x+='*';
            var e=user[i].created_date  ;
            var f=user[i].fullname;
        }
    }
    document.getElementById('momodal').style.display ='block';
    var s=  '<div class="ccontent"><span class="close" onclick="hideaccount()">&times;</span>'
            +'<div style="clear: both;"></div>'
            +'<div id="myinfomation" onclick="myinfomationn()">My infomation</div>'
            +'<div style="clear: both;"></div>'
            +'<div id="screen"><div id="sc1"><div class="infoo">USERNAME</div><div class="infoo">'+a+'</div><div class="infoo">FULLNAME</div><div class="infoo">'+f+'</div><div class="infoo">PHONE NUMBER</div><div class="infoo">'+c+'</div><div class="infoo">ADDRESS</div><div class="infoo">'+b+'</div><div class="infoo">PASSWORD</div><div class="infoo">'+x+'</div><div class="infoo">DATE CREATED</div><div class="infoo">'+e+'</div></div>';
    document.getElementById('momodal').innerHTML=s;
}

function myinfomationn(){
    document.getElementById('sc2').style.display='none';
    document.getElementById('sc1').style.display='block';
    document.getElementById('myinfomation').style.color='white';
    document.getElementById('myinfomation').style.backgroundColor='black';
    document.getElementById('changeinfomation').style.color='black';
    document.getElementById('changeinfomation').style.backgroundColor='rgb(255, 242, 217)';
}

function changeinfomationn() {
    document.getElementById('sc1').style.display='none';
    document.getElementById('sc2').style.display='block';
    document.getElementById('changeinfomation').style.color='white';
    document.getElementById('changeinfomation').style.backgroundColor='black';
    document.getElementById('myinfomation').style.color='black';
    document.getElementById('myinfomation').style.backgroundColor='rgb(255, 242, 217)';
}

function hideaccount() {
    document.getElementById('momodal').style.display='none';
}
/*END NEW*/

function showLogin() {
    if(localStorage.getItem('userlogin') == null)
    {
        document.getElementById('registerForm').style.display='none';
        document.getElementById('loginForm').style.display='block';
    }
    else
    {
        document.getElementById('registerForm').style.display='none';
        document.getElementById('loginForm').style.display='none';
    }
    
}

function showSignup() {
    if(localStorage.getItem('userlogin') == null)
    {
        document.getElementById('registerForm').style.display='block';
        document.getElementById('loginForm').style.display='none';
    }
    else
    {
        document.getElementById('loginForm').style.display='none';
        document.getElementById('registerForm').style.display='none';
    }
}

function closeForm() {
    document.getElementById('loginForm').style.display='none';
    document.getElementById('registerForm').style.display='none';
}

function slide() {   
    var slideIndex=1;
    showSlides(slideIndex);
    function showSlides(){
        var i;
        var slides = document.getElementsByClassName('slide');
        var runs = document.getElementsByClassName('nextpre');

        for (i = 0; i < slides.length; i++) 
        {
            slides[i].style.display = 'none';  
        }
        
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        for (i = 0; i < runs.length; i++) 
        {
            runs[i].className = runs[i].className.replace(' active', '');
        }
                
        slides[slideIndex-1].style.display = 'block';  
        runs[slideIndex-1].className += ' active';
        setTimeout(showSlides, 4000);
    }
}

function loadSticky () {
  var bot = document.querySelector("div#bot");
  bot.classList.toggle("sticky", window.scrollY > 0);
}

function loadBanner() {
    var url=window.location.href;
    var id= url.split('?');
    if(id[1]==null)
    {
        if(window.scrollY>200){
            document.getElementById("intro").style.display='block';
        } 

        if(window.scrollY>400){
            document.getElementById("laptype").style.display='block';
        }

        if(window.scrollY>1500){
            document.getElementById("intro2").style.display='block';
        }

        if(window.scrollY>1800){
            document.getElementById("intro3").style.display='block';
        }
    } 
}

var tam=[],tam2=[],tam3=[],tam4=[],tam5=[],loai=0,min=0,max=0;
function mangtam() {
    var products = [];
    products =JSON.parse(localStorage.getItem('products'));
    var url=window.location.href;
    var id=url.split('?');
    var i,t=0;
    for(i=0;i<products.length;i++)
    {
        if(id[1]==products[i].brand)
        {
            tam[t]=products[i];
            t++;
        }
    }
}
function changetam(){
    var products = [];
    products =JSON.parse(localStorage.getItem('products'));
    var i,t=0;
    var url=window.location.href;
     var id=url.split('=');
     if(id[1]!=null){
     var id2=id[1].split('?');
    for(i=0;i<products.length;i++){
       if(products[i].name.search(id2[0])!=-1)
         {
            tam2[t]=products[i];
            t++;
         }
    }
 }
}
function opgiamax(obj){
    var options = obj.children;
    var html = '',j=0;
    for (var i = 0; i < options.length; i++){
        if (options[i].selected){
            html =options[i].value;
        }
    }
    if(tam3.length==0&&tam4.length==0){
        for(var i=0;i<tam2.length;i++){
             if(html!=""){
                  if(tam2[i].price<=parseInt(html))
                      {
                          tam5[j]=tam2[i];
                          j++;
                      }
                      }
                      else{
                          tam5[j]=tam2[i];
                          j++;
                      }
           }
  }
  else {
        tam5=[];
        var k1=0,k2=0;
        if(tam3.length==0) k1=1;
        if(tam4.length==0) k2=1;
        for(var i=0;i<tam2.length;i++){
            if(k1==1){
                if(html!=""){
                    if(tam2[i].price<=parseInt(html)&&tam2[i].price>=min)
                        {
                            tam5[j]=tam2[i];
                            j++;
                        }
                    }
                    else if(tam2[i].price<=max){
                        tam5[j]=tam2[i];
                        j++;
                    }
                }
            if(k2==1){
                if(html!=""){
                    if(tam2[i].price<=parseInt(html)&&tam2[i].brand==tam3[0].brand)
                        {
                            tam5[j]=tam2[i];
                            j++;
                        }
                    }
                    else if(tam2[i].price<=max){
                            tam5[j]=tam2[i];
                            j++;
                        }
            }
            if(k1==0&&k2==0){
                if(html!=""){
                    if(tam2[i].price<=parseInt(html)&&tam2[i].brand==tam3[0].brand&&tam2[i].price>=min)
                        {
                            console.log("1");
                            tam5[j]=tam2[i];
                            j++;
                        }
                    }
                    else if(tam2[i].price>=min&&tam2[i].brand==tam3[i].brand){
                            tam5[j]=tam2[i];
                            j++;
                        }
        } 
    }
    }
    console.log(tam5.length);
  tam=tam5;
  max=parseInt(html); 
  if(tam.length!=0)
  xuatne(1);
  else document.getElementById('products').innerHTML="No product found";
}

function opgiamin(obj){
    var options = obj.children;
    var html = '',j=0;
    for (var i = 0; i < options.length; i++){
        if (options[i].selected){
            html =options[i].value;
        }
    }
    if(tam3.length==0&&tam5.length==0){
          for(var i=0;i<tam2.length;i++){
               if(html!=""){
                    if(tam2[i].price>=parseInt(html))
                        {
                            tam4[j]=tam2[i];
                            j++;
                        }
                        }
                        else{
                            tam4[j]=tam2[i];
                            j++;
                        }
             }
    }
    else{
        tam4=[];
        var k1=0,k2=0;
        if(tam3.length==0) k1=1;
        if(tam5.length==0) k2=1;
        for(var i=0;i<tam2.length;i++){
                if(k1==1){
                    if(html!=""){
                 if(tam2[i].price>=parseInt(html)&&tam2[i].price<=max)
                      {
                         tam4[j]=tam2[i];
                         j++;
                      }
                     }
                     else if(tam2[i].price<=max){
                         tam4[j]=tam2[i];
                         j++;
                     }
                }
                if(k2==1){
                    if(html!=""){
                if(tam2[i].price>=parseInt(html)&&tam2[i].brand==tam3[0].brand)
                {
                   tam4[j]=tam2[i];
                   j++;
                }
            }
               else if(tam2[i].price<=max){
                   tam4[j]=tam2[i];
                   j++;
               }
        }
               if(k1==0&&k2==0){
                if(html!=""){
                if(tam2[i].price>=parseInt(html)&&tam2[i].brand==tam3[0].brand&&tam2[i].price<=max)
                {
                   tam4[j]=tam2[i];
                   j++;
                }
            }
                  else if(tam2[i].price<=max&&tam2[i].brand==tam3[i].brand){
                   tam4[j]=tam2[i];
                   j++;
               }
        }
          } 
    }
    tam=tam4;  
       min=parseInt(html); 
       console.log(min);
    if(tam.length!=0)
    xuatne(1);
    else document.getElementById('products').innerHTML="No product found";
}

function oploai(obj){
    var options = obj.children;
    var html = '',j=0;
    console.log(min+":"+max);
    for (var i = 0; i < options.length; i++){
        if (options[i].selected){
            html =options[i].value;
        }
    }
    if(tam4.length==0&&tam5.length==0){
    for(var i=0;i<tam2.length;i++){
        if(html!=""){
          if(tam2[i].brand==html)
              {
                  tam3[j]=tam2[i];
                  j++;
              }
            }
            else{
                tam3[j]=tam2[i];
                  j++;
            }
      }
    }
    else{
        tam3=[];
        var k1=0,k2=0;
        if(tam4.length==0) k1=1;
        if(tam5.length==0) k2=1;
        for(var i=0;i<tam2.length;i++){
                if(k1==1){
                    if(html!=""){
                 if(tam2[i].brand==html&&tam2[i].price<=max)
                      {
                         tam3[j]=tam2[i];
                         j++;
                      }
                     }
                     else if(tam2[i].price<=max){
                         tam3[j]=tam2[i];
                         j++;
                     }
                }
                if(k2==1){
                    if(html!=""){
                if(tam2[i].brand==html&&tam2[i].price>=min)
                {
                   tam3[j]=tam2[i];
                   j++;
                }
            }
               else if(tam2[i].price>=min){
                   tam3[j]=tam2[i];
                   j++;
               }
            }
               if(k1==0&&k2==0){
                if(html!=""){
                if(tam2[i].price>=min&&tam2[i].brand==html&&tam2[i].price<=max)
                {

                   tam3[j]=tam2[i];
                   j++;
                }
            }
                  else if(tam2[i].price<=max&&tam2[i].price>=min){
                   tam3[j]=tam2[i];
                   j++;
               }
        }
          }     
    }
    tam=tam3;
    console.log(tam.length);
    if(tam.length!=0)
    xuatne(1);
    else document.getElementById('products').innerHTML="No product found";
}

function xuatne(k){
    if(k>0)
    {
        var  List = changeListtoHTML(k);
        var Product = document.getElementById('products');
        Product.innerHTML = List;
        pagpag();
    }
}

function pagpag(){
    var x="";
    if(tam.length%sptrang==0){
        pagecount=tam.length/sptrang;
    }

    else {
          pagecount=tam.length/sptrang+1;
    }

    for(var i=1;i<=pagecount;i++)
    {
        var page ='<div class="pagenumber pagination" onclick="xuatne('+i+')">'
                + i
                + '</div>';
                x+=page;
    }
    var content = document.getElementById('paging');
    content.innerHTML = x; 
}
var sptrang=12;
function showProducts() {
    var url=window.location.href;
              var id=url.split('?'),i;
              if(id[1]!=null){
              var id2=id[1].split('=');
      for(i=0;i<=pagecount;i++){
        if(id2[1]!=null&&id[2]==null){
            changetam();
            tam=tam2;
            var op ='<div style="margin-top:150px;font-size:30px;margin-left:50px">Search: '+id2[1]+'</div>';
            op+='<div  style="float:left;margin-left:50px;margin-top:20px"><select id="loai" style="height:50px;outline:none;width:200px;" onchange="oploai(this)">'
            +'<option value="">--Type--</option>'
            +'<option value="Dell">Dell</option>'
            +'<option value="Appple">Apple</option>'
            +'<option value="Asus">Asus</option>'
            +'<option value="Acer">Acer</option>'
            +'</select></div>'
            op+='<div  style="float:left;margin-left:50px;margin-top:20px"><select id="giamin" style="height:50px;outline:none;width:200px;" onchange="opgiamin(this)">'
            +'<option value="">--PriceMin--</option>'
            +'<option value="10000000">10.000.000</option>'
            +'<option value="15000000">15.000.000</option>'
            +'<option value="25000000">25.000.000</option>'
            +'<option value="35000000">35.000.000</option>'
            +'</select></div>';
            op+='<div  style="float:left;margin-left:50px;margin-top:20px"><select id="giamax" style="height:50px;outline:none;width:200px;" onchange="opgiamax(this)">'
            +'<option value="">--PriceMax--</option>'
            +'<option value="20000000">20.000.000</option>'
            +'<option value="30000000">30.000.000</option>'
            +'<option value="45000000">45.000.000</option>'
            +'<option value="65000000">65.000.000</option>'
            +'</select></div>';
            var List = changeListtoHTML(1);
            document.getElementById('option').innerHTML=op;
        var Product = document.getElementById('products');
        Product.innerHTML = List;
        document.getElementById('paging').style.display='block';
        document.getElementById('products').style.display='block';
        document.getElementById("banner").style.display='none';
        document.getElementById("intro2").style.display='none';
        document.getElementById("intro3").style.display='none';
        document.getElementById("foot").style.marginTop='0px';
        break;
        }
        if(id[2]==i){
        document.getElementById('paging').style.display='block';
        document.getElementById('products').style.display='block';
        document.getElementById("banner").style.display='none';
        document.getElementById("intro2").style.display='none';
        document.getElementById("intro3").style.display='none';
        document.getElementById("foot").style.marginTop='0px';
        if(id2[1]==null)
        {
            var List ='<div style="margin-top:150px;margin-left:150px;"><span style="font-weight: bold;font-size:50px;">'+id[1]+'</span></div>';
             List += changeListtoHTML(i);
        var Product = document.getElementById('products');
        Product.innerHTML = List;
        }
        else {
            changetam();
            tam=tam2;
            var op ='<div style="margin-top:150px;font-size:30px;margin-left:50px">Search: '+id2[1]+'</div>';
            op+='<div  style="float:left;margin-left:50px;margin-top:20px"><select id="loai" style="height:50px;outline:none;width:200px;" onchange="oploai(this)">'
            +'<option value="">--Type--</option>'
            +'<option value="Dell">Dell</option>'
            +'<option value="Appple">Apple</option>'
            +'<option value="Asus">Asus</option>'
            +'<option value="Acer">Acer</option>'
            +'</select></div>'
            op+='<div  style="float:left;margin-left:50px;margin-top:20px"><select id="giamin" style="height:50px;outline:none;width:200px;" onchange="opgiamin(this)">'
            +'<option value="">--PriceMin--</option>'
            +'<option value="10000000">10.000.000</option>'
            +'<option value="15000000">15.000.000</option>'
            +'<option value="25000000">25.000.000</option>'
            +'<option value="35000000">35.000.000</option>'
            +'</select></div>';
            op+='<div  style="float:left;margin-left:50px;margin-top:20px"><select id="giamax" style="height:50px;outline:none;width:200px;" onchange="opgiamax(this)">'
            +'<option value="">--PriceMax--</option>'
            +'<option value="20000000">20.000.000</option>'
            +'<option value="30000000">30.000.000</option>'
            +'<option value="45000000">45.000.000</option>'
            +'<option value="65000000">65.000.000</option>'
            +'</select></div>';
            List = changeListtoHTML(i);
            document.getElementById('option').innerHTML=op;
        var Product = document.getElementById('products');
        Product.innerHTML = List;
        }
        break;
              }
              else {
                document.getElementById('paging').style.display='none';
                document.getElementById('products').style.display='none';
                document.getElementById("banner").style.display='block';
                document.getElementById("intro2").style.display='none';
                document.getElementById("intro3").style.display='none';
                document.getElementById("foot").style.marginTop='0px';
              }
            }
        }
}
tinh(pagecount);

function changeListtoHTML (g) {
    var dem=1;
    var n=(g-1)*sptrang;
    var listproduct = '<div class="items">';
    for(var i = n;i<tam.length;i++)
    {
        var product = tam[i];
        var HTMLproduct = changetoHTML(product,i);
        listproduct += HTMLproduct;
        if(dem==sptrang)
        break;
        dem++;
    }
    listproduct += '</div>';
    return listproduct;
}

var p1;
function changetoHTML (product,n) {
    var k=product.brand+n;
    var x="'"+k+"a'";
    var y="'"+k+"b'";
    var z="'"+k+"c'";
    var t="'"+k+"d'";
    var a="'"+product.img+"'";
    var b="'"+product.img2+"'";
    var c="'"+product.imgct+"'";
    var d=product.price;
    var l="'"+product.name+"'";
    console.log(l);
    var HTMLpd = '<div class="item">' 
                + '<div class="item-thumb" onmouseover="hieniconsp('+x+','+y+','+z+','+t+')" onmouseout="aniconsp('+x+','+y+','+z+','+t+')">' 
                + '<img src="' + product.img + '" class="item-pic" id="'+k+'a">' 
                + '<div class="iconthemgiohag1" id="'+k+'b" onclick="addtocart('+n+')"><i class="fa fa-shopping-bag" title="Thêm vào giỏ hàng"></i></div>'
                + '<div class="iconthemgiohag2" id="'+k+'c" title="chưa nghĩ ra"><i class="fa fa-user"></i></div>'
                + '<div class="iconthemgiohag3" id="'+k+'d" title="Thông tin chi tiết" onclick="chitiet('+a+','+b+','+c+','+n+','+d+','+l+')"><i class="fa fa-info"></i></div>'
                + '</div>'
                + '<h2 class="item-title">'+ product.name + '</h2>'
                + '<div class="item-price">Price: ' + product.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ' VND' + '</div>'
                + '</div>'
    return HTMLpd;
}

function hieniconsp(a,b,c,d){
    document.getElementById(b).style.display='block';
     document.getElementById(c).style.display='block';
     document.getElementById(d).style.display='block';
 }
 function aniconsp(a,b,c,d){ 
    document.getElementById(b).style.display='none';
    document.getElementById(c).style.display='none';
    document.getElementById(d).style.display='none';
 }
var pagecount=0;

function pagination(){
    mangtam();
    changetam();
    var url=window.location.href;
    var id=url.split('?');
    var x='';
    var flag=0;
    if(tam.length!=0){
        if(tam.length%sptrang==0)
        {
            pagecount=tam.length/sptrang;
        }
        else
        {
            pagecount=tam.length/sptrang+1;
            flag=1;
        }
    }
    else {
        if(tam2.length%sptrang==0){
            pagecount=tam2.length/sptrang;
         }
         else {
              pagecount=tam2.length/sptrang+1;
         }
    }
    if(pagecount>=2)
    {
        for(var i=1;i<=pagecount;i++)
        {
            var page =  '<a href="Index.html?'+id[1]+'?'+i+'" class="pagination"  id="p'+i+'">'
                      + '<div class="pagenumber">'
                      + i
                      + '</div></a>';
            x+=page;       
        }
        var content = document.getElementById('paging');
        content.innerHTML = x;
    }
}

pagination(); 

function tinh(x){
    var s=0;
    for(var i=1;i<=x;i++)
    {
        var k="p"+i;
        if(i==1)
         s=43-x+i;
        document.getElementById(k).style.left= s+'%';
    }
}

function addtocart(n) {
    if(localStorage.getItem('cart')===null)
    {   
        var mang = [];
        localStorage.setItem('cart',JSON.stringify(mang));
    }
    var flag=0,o=0;
    var bien={productID:tam[n].productID, brand: tam[n].brand, img: tam[n].img, name:tam[n].name, price:tam[n].price, amount:1};
    mang = JSON.parse(localStorage.getItem('cart'));
    for(var i=0;i<mang.length;i++)
    {
        if(mang[i].productID==bien.productID)
        {
            flag=1;
            mang[i].amount++;
        }
        o+=mang[i].amount;
    }
    if(flag==0)
        mang.push(bien);
    localStorage.setItem('cart',JSON.stringify(mang));
    showitemcart();
}

function addtocart2(n) {
    var k=document.getElementById("sluong").value;

        if(localStorage.getItem('cart')===null)
    {   
        var mang = [];
        localStorage.setItem('cart',JSON.stringify(mang));
    }
    var flag=0,o=0;
    var bien={productID:tam[n].productID, brand: tam[n].brand, img: tam[n].img, name:tam[n].name, price:tam[n].price, amount:parseInt(k)};
    mang = JSON.parse(localStorage.getItem('cart'));
    for(var i=0;i<mang.length;i++)
    {
        if(mang[i].productID==bien.productID)
        {
            flag=1;
            mang[i].amount+=parseInt(k);
        }
        o+=mang[i].amount;
    }
    if(flag==0)
        mang.push(bien);
    localStorage.setItem('cart',JSON.stringify(mang));
    showitemcart();
}

function backMainpage() {
    window.location.href='Index.html';
}

function loadWelcome() {
    var y= JSON.parse(localStorage.getItem('userlogin'));
    var a= '<div id admintest>Welcome back, '+y.username+'</div>';
    document.getElementById('admintest').innerHTML=a;
}

function checkcart () {
    if(localStorage.getItem('cart')!=null)
    {
        document.getElementById('cartinfo').style.display="none";
        showCart();
    }
    else
    {
        document.getElementById('cartinfo').style.display="block";
        document.getElementById('cartList').style.display="none";
    }
}

var x=[];
function showCart() {
    var s="",s2="";
    x= JSON.parse(localStorage.getItem('cart'));
    var o=0,gia=0;
    for(var i=0;i<x.length;i++)
    {
        o+=x[i].amount;
        gia+=x[i].price*x[i].amount;
    }
    for(var i =0;i<x.length;i++)
    {
        s   += '<div id="itemincart" style="background-color:white"><div style="float:left;margin:5px 10px"><img src="'+x[i].img+'" style="float:left; height:180px;width:150px"></div>'
            + '<div style="float:left; width:45%; margin-top: 55px; font-size:1em;"><p>'+x[i].name+'</p><p style="margin-top:20px;font-size:15px;font-weight:400px;color:blue;cursor:pointer " onclick="deletepd('+i+')">Delete</p></div>'
            + '<div style="float:right;width:18%;margin-top:55px;margin-right:20px;font-size:16px">'
            + '<div style="font-weight:bold;">'+x[i].price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')+' VND</div>' 
            + '<div style="text-align:center;margin-top:15px;cursor:pointer"><div style="border-radius:5px 0 0 5px; float:left;border:solid 0.5px;width:35px;padding:auto;height:30px;line-height:28px;" onclick="despd('+i+')" >&ndash;</div><div style="float:left;border:solid 0.5px;width:40px;padding:auto;font-weight:20;height: 30px;line-height:28px"><input type="text" size=1px style="text-align:center;height:25px;outline:none" id="'+x[i].brand+i+'" value="'+x[i].amount+'" onchange="onchanged('+x[i].productID+',this.value)"></div><div style="border-radius:0 5px 5px 0; float:left;border:solid 0.5px;width:35px;padding:auto;height:30px;line-height:30px" onclick="incpd('+i+')">+</div>'
            +'</div></div></div>';    
    }
    s2  +=  '<div>'
        +   '<div style="margin:40px 120px">ORDER SUMMARY</div>'
        +   '<div style="margin-left:20px;">Subtotal ('+o+' item(s))<span style="margin-left:90px">' +gia.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + 'VND</span> </div>'
        +   '<div style="border-bottom:1px solid;margin:30px auto; width:90%;"></div>'
        +   '<div style="margin-left:20px;margin-top:20px">Total <span style="margin-left:170px;font-size:20px;color:red;font-weight:bold">' +gia.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + 'VND</span> </div>'
        +   '<div style="width:80%;height:40px;border: solid 0.5px;margin:20px auto;text-align:center;line-height:40px;background-color:red;color:white" onclick=" createBill(),createCart2()">CONFIRM ORDER</div>'
        +   '</div>';
    document.getElementById('cartproduct').innerHTML=s;
    document.getElementById('payinginfo').innerHTML=s2;
}

function showitemcart() {
    var a=JSON.parse(localStorage.getItem('cart'));
    if(a.length>0)
    {
        document.getElementById('numcart').style.display='inline-block';
        document.getElementById('numcart').innerHTML=a.length;
    }
}

function showitemcart2() {
    var a=JSON.parse(localStorage.getItem('cart'));
    if(a.length>0)
    {
        document.getElementById('numcart2').style.display='inline-block';
        document.getElementById('numcart2').innerHTML=a.length;
    }
}

function deletepd(a) {
    x.splice(a,1);
    localStorage.setItem('cart',JSON.stringify(x));
    if(x.length==0)
    {
        localStorage.removeItem('cart');
        window.location.reload();
    }
    checkcart();
    showCart();
}

function incpd(a) {
    var u=[];
    u= JSON.parse(localStorage.getItem('products'));
    for(var i=0;i<u.length;i++)
    {
        if(u[i].productID==x[a].productID)
        {
            var k= x[a].amount+1;
            if(k>u[i].amount)
            {
                alert("Don't have enough products");
            }
            else
            {
                x[a].amount=k;
                localStorage.setItem('cart',JSON.stringify(x));
                showCart();
            }
        }
    }
}
function despd(a) {
    var k=x[a].amount-1;
    if(k>=1)
    { 
        x[a].amount=k;   
        localStorage.setItem('cart',JSON.stringify(x));
        showCart();
    }
}

function onchanged(g,s) {
    var patt= /[^a-z]/gi;
    if(s.match(patt)==null || parseInt(s)>100)
    {
        alert("Error, Invalid input");
    }
    else
    {
        if(s<1)
        {
            alert('Error, Invalid number');
            s=1;
        }
        else
        {
            for(i=0;i<x.length;i++)
            {
                if(x[i].productID==g)
                {
                        x[i].amount=parseInt(s);
                }
            }
            localStorage.setItem('cart',JSON.stringify(x));
        }
        showCart();
    }
}

// function showManageUser () {
//     if(localStorage.getItem('users')===null){
// 		return false;
// 	}
//     var y= JSON.parse(localStorage.getItem('userlogin'));
//     var userArray=JSON.parse(localStorage.getItem('users'));
//     var tr  ='<table id="manageadmin">'
//             +'<tr><td>STT</td>'
//             +'<td class="td">Fullname</td>'
//             +'<td class="td">Username</td>'
//             +'<td class="td">Datecreated</td>'
//             +'<td class="td">Power</td>'
//             +'<td class="td">Delete</td>'
//             +'<td class="td">authorization</td></tr>';
//     for(var i=0;i<userArray.length;i++){
//         tr  +='<tr><td>'+i+'</td>'
//             +'<td class="td">'+userArray[i].fullname+'</td>'
//             +'<td class="td">'+userArray[i].username+'</td>'
//             +'<td class="td">'+userArray[i].created_date+'</td>'
//             +'<td class="td">'+userArray[i].power+'</td>'
//             +'<td class="td"><button class="delete btn" onclick="deleteuser(\''+userArray[i].username+'\')">&times;</button></td>'
//             +'<td class="td"><button class="delete btn" onclick="authorization1(\''+userArray[i].username+'\')">&harr;</button></td></tr>';
// 	}
//     tr=tr+'</table>';
//     var s = '<button id="hideopennav" onclick="onoff()">&#x2630;</button><div id="admintest">Welcome back, '+y.username+'</div>'
//             + tr
//             +'</div>';
//     document.getElementById('broad').innerHTML=s;
//     document.getElementById('mnp').style.textAlign ='left';
//     document.getElementById('mnu').style.textAlign ='center';
//     document.getElementById('am').style.textAlign ='left';
//     //document.getElementById('ht').style.textAlign ='left';
//     document.getElementById('ol').style.textAlign ='left';
//     document.getElementById('mp').style.textAlign ='left';
//     document.getElementById('tk').style.textAlign ='left'
// }

// function authorization1(author){
// 	var userArray=JSON.parse(localStorage.getItem('users'));
// 	for(var i=0;i<userArray.length;i++){
// 		if(userArray[i].username==author&&userArray[i].power=='MEMBER'){
// 			userArray[i].power='ADMIN';
// 		}
// 		else if(userArray[i].username==author&&userArray[i].power=='ADMIN'){
// 			userArray[i].power='MEMBER';
// 		}
// 	}
// 	localStorage.setItem('users',JSON.stringify(userArray));
// 	showManageUser ()
// }

// function deleteuser(usernamedelete){
// 	var userArray = JSON.parse(localStorage.getItem('users'));
// 	for(var i=0;i<userArray.length;i++){	
// 		if(userArray[i].username == usernamedelete){
// 			if(confirm('Bạn có muốn xóa tài khoản này?')){
// 				userArray.splice(i, 1);
// 			}
// 		}
// 	}
// 	localStorage.setItem('users',JSON.stringify(userArray));
// 	showManageUser ();
// }

function pagManageProduct(){
    var x="";
    var productArray= JSON.parse(localStorage.getItem('products'));
    if(productArray.length%10==0){
        pagecount=productArray.length/10;
    }

    else {
          pagecount=productArray.length/10+1;
    }

    for(var i=1;i<=pagecount;i++)
    {
        var page ='<div class="pagenumber pagination" onclick="showManageProduct('+i+')" id="p'+i+'" >'
                + i
                + '</div>';
                x+=page;
    }
    return x;
}

function showManageProduct (a) {
    ///////////////////////////////////////
    if(localStorage.getItem('products')===null){
		return false;
	}
    var y= JSON.parse(localStorage.getItem('userlogin'));
    var productArray= JSON.parse(localStorage.getItem('products'));
    var c='';
    var cc;
   ////// 
   var dem1=0;/////
   var tr1='<table><tr>'
               +'<td style="font-size: 20px;background-color: pink">ProductID</td>'
               +'<td style="font-size: 20px;background-color: pink" class="td">Brand</td>'
               +'<td style="font-size: 20px;background-color: pink" class="td">Img</td>'
               +'<td style="font-size: 20px;background-color: pink" class="td">Name</td>'
               +'<td style="font-size: 20px;background-color: pink" class="td">Price</td>'
               +'<td style="font-size: 20px;background-color: pink" class="td"">Amount</td>'
               +'<td style="font-size: 20px;background-color: pink" class="td">Delete</td>'
               +'<td style="font-size: 20px;background-color: pink" class="td">Add</td>'
               +'<td style="font-size: 20px;background-color: pink" class="td">Reduce</td>'
               +'<td style="font-size: 20px;background-color: pink" class="td">Fix</td></tr>';
               var n=(a-1)*10;
   	for(var i=n; i<productArray.length;i++){
   		var dem=-1;
           for(var j=productArray[i].img.length;j>=0;j--){
               cc=productArray[i].img.length;
               if(productArray[i].img[j]!='/'){
                   dem++;
               }
               else{
                   c=productArray[i].img.slice(cc-dem);
                   break;
               }
           }
           tr1 +='<tr><td>'+productArray[i].productID+'</td>'
               +'<td class="td">'+productArray[i].brand+'</td>'
               +'<td class="td"><img style="width: 150px;height: 150px" src="'+productArray[i].img+'"></td>'
               +'<td class="td">'+productArray[i].name+'</td>'
               +'<td class="td">'+[productArray[i].price].toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + 'VND</td>'
               +'<td class="td">'+productArray[i].amount+'</td>'
               +'<td class="td"><button onClick="deleteproduct('+productArray[i].productID+')" class="btn">&times;</button></td>'
               +'<td class="td"><button onClick="upproduct('+productArray[i].productID+')" class="btn">+</button></td>'
               +'<td class="td"><button onClick="divineproduct('+productArray[i].productID+')"class="btn">-</button></td>'
               +'<td class="td"><button onClick="repaireproduct('+productArray[i].productID+')"class="btn"><i class="fa fa-cog"></i></button></td></tr>';
               dem1++;
            if(dem1==10)
            break;
   	}
       tr1=tr1+'</table>';
       tr1=tr1+'<div style="margin-top:30px">'+pagManageProduct()+'</div>';
       var s = '<button id="hideopennav" onclick="onoff()">&#x2630;</button> <div id="admintest">Welcome back, '+y.username+'</div>'
               +'<div class="products">'
               +tr1
               +'</div>';
    document.getElementById('broad').innerHTML=s;
    tinh(pagecount);
    document.getElementById('mnp').style.textAlign ='center';
    document.getElementById('mnu').style.textAlign ='left';
    document.getElementById('am').style.textAlign ='left';
    document.getElementById('ht').style.textAlign ='left';
    document.getElementById('ol').style.textAlign ='left';
    document.getElementById('mp').style.textAlign ='left';
    document.getElementById('tk').style.textAlign ='left';
     
    ////////////////////////////////////////////////////////////////
    document.getElementById('thongke').style.textAlign ='left';
    ////////////////////////////////////////////////////////////////////
}


function showManageProduct () {
    if(localStorage.getItem('products')===null){
		return false;
	}
    var y= JSON.parse(localStorage.getItem('userlogin'));
    var productArray= JSON.parse(localStorage.getItem('products'));
    var c='';
	var cc;
    var tr1='<table><tr>'
            +'<td style="font-size: 20px;background-color: pink">ProductID</td>'
            +'<td style="font-size: 20px;background-color: pink" class="td">Brand</td>'
            +'<td style="font-size: 20px;background-color: pink" class="td">Img</td>'
            +'<td style="font-size: 20px;background-color: pink" class="td">Name</td>'
            +'<td style="font-size: 20px;background-color: pink" class="td">Price</td>'
            +'<td style="font-size: 20px;background-color: pink" class="td"">Amount</td>'
            +'<td style="font-size: 20px;background-color: pink" class="td">Delete</td>'
            +'<td style="font-size: 20px;background-color: pink" class="td">Add</td>'
            +'<td style="font-size: 20px;background-color: pink" class="td">Reduce</td>'
            +'<td style="font-size: 20px;background-color: pink" class="td">Fix</td></tr>';
	for(var i=0; i<productArray.length;i++){
		var dem=-1;
        for(var j=productArray[i].img.length;j>=0;j--){
            cc=productArray[i].img.length;
            if(productArray[i].img[j]!='/'){
                dem++;
            }
            else{
                c=productArray[i].img.slice(cc-dem);
                break;
            }
        }
        tr1 +='<tr><td>'+productArray[i].productID+'</td>'
            +'<td class="td">'+productArray[i].brand+'</td>'
            +'<td class="td"><img style="width: 150px;height: 150px" src="'+productArray[i].img+'"></td>'
            +'<td class="td">'+productArray[i].name+'</td>'
            +'<td class="td">'+productArray[i].price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + 'VND</td>'
            +'<td class="td">'+productArray[i].amount+'</td>'
            +'<td class="td"><button onClick="deleteproduct('+productArray[i].productID+')" class="btn">&times;</button></td>'
            +'<td class="td"><button onClick="upproduct('+productArray[i].productID+')" class="btn">+</button></td>'
            +'<td class="td"><button onClick="divineproduct('+productArray[i].productID+')"class="btn">-</button></td>'
            +'<td class="td"><button onClick="repaireproduct('+productArray[i].productID+')"class="btn"><i class="fa fa-cog"></i></button></td></tr>';
	}
	tr1=tr1+'</table>';
    var s = '<button id="hideopennav" onclick="onoff()">&#x2630;</button> <div id="admintest">Welcome back, '+y.username+'</div>'
            +'<div class="products">'
            +tr1
            +'</div>';
    document.getElementById('broad').innerHTML=s;
    document.getElementById('mnp').style.textAlign ='center';
    document.getElementById('mnu').style.textAlign ='left';
    document.getElementById('am').style.textAlign ='left';
    //document.getElementById('ht').style.textAlign ='left';
    document.getElementById('ol').style.textAlign ='left';
    document.getElementById('mp').style.textAlign ='left';
}

function deleteproduct(productIddelete){
	var productArray = JSON.parse(localStorage.getItem('products'));
	for(var i=0;i<productArray.length;i++){
		if(productArray[i].productID == productIddelete){
			if(confirm('Are you sure to want to delete this product?')){
				productArray.splice(i, 1);
			}
		}
	}
	localStorage.setItem('products',JSON.stringify(productArray));
	showManageProduct (1);
}

function upproduct(productmore){
    var productArray=JSON.parse(localStorage.getItem('products'));
	for(var i=0;i<productArray.length;i++){
		if(productArray[i].productID==productmore){
			
			productArray[i].amount+=1;
			
		}
	}
	localStorage.setItem('products',JSON.stringify(productArray));
	showManageProduct (1);
}

function divineproduct(productdv){
	var productArray=JSON.parse(localStorage.getItem('products'));
	for(var i=0;i<productArray.length;i++){
		if(productArray[i].productID==productdv){
			productArray[i].amount-=1;
		}
	}
	localStorage.setItem('products',JSON.stringify(productArray));
	showManageProduct (1);
}

var hehe='';
function repaireproduct(productsua){
    var productArray=JSON.parse(localStorage.getItem('products'));
    document.getElementById('id01').style.display='block'
	for(var i=0;i<productArray.length;i++){
		if(productArray[i].productID==productsua){
            var ph=productArray[i].productID;
            var pc=productArray[i].brand;
            var py=productArray[i].img;
            var pl=productArray[i].name;
            var po=productArray[i].price;
            var pt=productArray[i].amount;
            var pk=productArray[i].img2;
            var pj=productArray[i].imgct;
			document.getElementById("productID1").setAttribute("value", ph);
			document.getElementById("brand1").setAttribute("value", pc);
            document.getElementById("img1").setAttribute("value", py);
            document.getElementById("img21").setAttribute("value", pk);
            document.getElementById("imgct1").setAttribute("value", pj);
			document.getElementById("name1").setAttribute("value", pl);
			document.getElementById("price1").setAttribute("value", po);
			document.getElementById("amount1").setAttribute("value", pt);
		}
    }
    hehe=productsua;
	localStorage.setItem('products',JSON.stringify(productArray));
    showManageProduct (1);
}

function doituongsanpham(productID,brand,img,name,price,amount){
    var sanpham=new Object();
    sanpham.productID=productID;
    sanpham.brand=brand;
    sanpham.img=img;
	sanpham.price=price;
	sanpham.name=name;
    sanpham.amount=amount;
    return sanpham;
}

function taomoisanpham(){
	var productArray=JSON.parse(localStorage.getItem('products'));
    var nodeproductID=document.getElementById('productID');
    var productID=nodeproductID.value;
    if(productID==''){
        document.getElementById("wproductid").style.display="block";
        document.getElementById("wwproductid").style.display="none";
        nodeproductID.focus();
        return false;
    }else if(productID>='a'&&productID<='z'){
        document.getElementById("wproductid").style.display="none";
        document.getElementById("wwproductid").style.display="block";
        nodeproductID.focus();
        return false;
    }else{
        document.getElementById("wproductid").style.display="none";
        document.getElementById("wwproductid").style.display="none";
    }
    
	var nodebrand=document.getElementById('brand');
    var brand=nodebrand.value;

	var nodeimg=document.getElementById('img');
	var img=(nodeimg.value).replace('C:\\fakepath\\','Images/products/');
    //var img = ('Images/product/'+nodeimg.value).replace(/C:\\fakepath\\/i, '')
    if(img==''){
        document.getElementById("wimg").style.display="block";
        nodeimg.focus();
        return false;
    }else{
        document.getElementById("wimg").style.display="none";
    }
    

    var nodename=document.getElementById('name');
    var name=nodename.value;
    if(name==''){
        document.getElementById("wname").style.display="block";
        nodename.focus();
        return false;
    }else{
        document.getElementById("wname").style.display="none";
    }

    var nodeprice=document.getElementById('price');
    var price=nodeprice.value;
    if(price==''){
        document.getElementById("wprice").style.display="block";
        document.getElementById("wwprice").style.display="none";
        nodeprice.focus();
        return false;
    }else if(price>='a'&&price<='z'){
        document.getElementById("wprice").style.display="none";
        document.getElementById("wwprice").style.display="block";
        nodeprice.focus();
        return false;
    }else{
        document.getElementById("wprice").style.display="none";
        document.getElementById("wwprice").style.display="none";
    }
    
    var nodeamount=document.getElementById('amount');
    var amount=nodeamount.value;
    if(amount==''){
        document.getElementById("wamount").style.display="block";
        document.getElementById("wwamount").style.display="none";
        nodeamount.focus();
        return false;
    }else if(amount>='a'&&amount<='z'){
        document.getElementById("wamount").style.display="none";
        document.getElementById("wwamount").style.display="block";
        nodeamount.focus();
        return false;
    }else{
        document.getElementById("wamount").style.display="none";
        document.getElementById("wwamount").style.display="none";
    }

    var nodeimg2=document.getElementById('img2');
	var img2=(nodeimg2.value).replace('C:\\fakepath\\','Images/products/');
	//var img = ('Images/product/'+nodeimg.value).replace(/C:\\fakepath\\/i, '')
    if(img2==''){
        document.getElementById("wimg2").style.display="block";
        nodeimg2.focus();
        return false;
    }else{
        document.getElementById("wimg2").style.display="none";
    }

    var nodeimgct=document.getElementById('imgct');
	var imgct=(nodeimgct.value).replace('C:\\fakepath\\','Images/products/');
	//var img = ('Images/product/'+nodeimg.value).replace(/C:\\fakepath\\/i, '')
    if(imgct==''){
        document.getElementById("wimgct").style.display="block";
        nodeimgct.focus();
        return false;
    }else{
        document.getElementById("wimgct").style.display="none";
    }

    var fla=0;
    amount=parseInt(nodeamount.value);
    price=parseInt(nodeprice.value);
    for(var i=0;i<productArray.length;i++){
        if(productArray[i].productID==productID){
            fla=1;
            productArray[i].amount+=amount;
            var jsondanhsachsanpham=JSON.stringify(productArray);
            localStorage.setItem('products',jsondanhsachsanpham);
        }
    }
    if(fla==0){
        var sanpham=doituongsanpham(productID,brand,img,name,price,amount,img2,imgct);
        productArray.push(sanpham);
        var jsondanhsachsanpham=JSON.stringify(productArray);
		localStorage.setItem('products',jsondanhsachsanpham);
    }  
    nodeproductID.value='';
    nodename.value='';
    nodeimg.value='';
    nodeimg2.value='';
    nodeimgct.value='';
    nodeprice.value=''
    nodeamount.value=''
}

function suasanpham(){
	var productArray=JSON.parse(localStorage.getItem('products'));
	var nodeproductID1=document.getElementById('productID1');
	var productID1=nodeproductID1.value;

	var nodebrand1=document.getElementById('brand1');
	var brand1=nodebrand1.value;

	var nodeimg1=document.getElementById('img1');
	var img1=(nodeimg1.value).replace('C:\\fakepath\\','Images/products/');

	var nodename1=document.getElementById('name1');
	var name1=nodename1.value;

	var nodeprice1=document.getElementById('price1');
	var price1=parseInt(nodeprice1.value);

	var nodeamount1=document.getElementById('amount1');
    var amount1=parseInt(nodeamount1.value);
    
    var nodeimg2=document.getElementById('img21');
    var img21=(nodeimg2.value).replace('C:\\fakepath\\','Images/products/');
    
    var nodeimgct=document.getElementById('imgct1');
	var imgct1=(nodeimgct.value).replace('C:\\fakepath\\','Images/products/');

	for(var i=0;i<productArray.length;i++){
		if(productArray[i].productID==hehe){
            productArray[i].brand=brand1;
			productArray[i].name=name1;
			productArray[i].price=price1;
            productArray[i].amount=amount1;
            if(img1!=''){
                productArray[i].img=img1;
            }	
            if(img21!=''){
                productArray[i].img2=img21;
            }	
            if(imgct1!=''){
                productArray[i].imgct=imgct1;
            }		
            productArray[i].productID=productID1;
			var jsondanhsachsanpham=JSON.stringify(productArray);
            localStorage.setItem('products',jsondanhsachsanpham);
		}
	}
	showManageProduct (1);
}

function showAddMenu(){
    var y= JSON.parse(localStorage.getItem('userlogin'));
    var s = '<button id="hideopennav" onclick="onoff()">&#x2630;</button><div id="admintest">Welcome back, '+y.username+'</div>'+
            '  <div id="themmoisanpham"><div style="margin:150px auto; width:40%;border:solid 1px;font-size:15px">'+
                    '<h2 style="text-align: center;padding:20px">Add new product</h2>'+
                    '<label for="productid" >ProductID:</label>'+
                    '<input type="text" id="productID"></br>'+
                    '<div id="wproductid" style="color:red;display:none">please enter productid</div>'+'<div id="wwproductid" style="color:red;display:none">enter by number,please</div>'+
                    '<label for="productid" >Brand:</label>'+
                    '<select id="brand"><option>Asus</option><option>Acer</option><option>Dell</option><option>Apple</option></select></br>'+
                    '<label for="img" >Picture:</label>'+
                    '<input type="file" id="img"></br>'+
                    '<div id="wimg" style="color:red;display:none">please choose image</div>'+
                    '<label for="img" >Picture2:</label>'+
                    '<input type="file" id="img2"></br>'+
                    '<div id="wimg2" style="color:red;display:none">please choose image number 2</div>'+
                    '<label for="img" >Picture detail:</label>'+
                    '<input type="file" id="imgct"></br>'+
                    '<div id="wimgct" style="color:red;display:none">please choose detail image</div>'  +                   
                    '<label for="ten" >Name:</label>'+
                    '<input type="text" id="name"></br>'+
                    '<div id="wname" style="color:red;display:none">please enter product name</div>'+
                    '<label for="gia" >Price:</label>'+
                    '<input type="text" " id="price"></br>'+
                    '<div id="wprice" style="color:red;display:none">please enter price</div>'+'<div id="wwprice" style="color:red;display:none">enter by number,please</div>'+
                    '<label for="soluong" >Amount:</label>'+
                    '<input type="text" id="amount"></br>'+
                    '<div id="wamount" style="color:red;display:none">please enter amount</div>'+'<div id="wwamount" style="color:red;display:none">enter by number,please</div>'+
                    '<button onclick="return taomoisanpham()">Add product</button>'+
                '</div></div>'
    document.getElementById('broad').innerHTML=s;
    document.getElementById('mnp').style.textAlign ='left';
    document.getElementById('mnu').style.textAlign ='left';
    document.getElementById('am').style.textAlign ='center';
    //document.getElementById('ht').style.textAlign ='left';
    document.getElementById('ol').style.textAlign ='left';
    document.getElementById('mp').style.textAlign ='left';
    document.getElementById('tk').style.textAlign ='left';
    document.getElementById('thongke').style.textAlign ='left';
}

function showBillmodal (){
    document.getElementById('WatchBill').style.display ='block';
}

function closebilltable () {
    document.getElementById('WatchBill').style.display="none";
}

function usershowbill () {
    var billArray =[], log="",hien="";
    billArray=JSON.parse(localStorage.getItem('bill'));
    var a   ='<div style="width:100%; height:50px; line height:50px; text-align:center;font-size:30px;margin-top:-50px">Buying history</div>'
            +'<div class="productinbill"><div style="float:left;width:100px">Bill ID</div><div style="width:50%;float:left;">Info</div><div style="float:left"><span style="margin-right:20px">Date</span><div style="margin-right:30px;float:left;width:120px;">Time</div></div><div style="margin-right:105px;float:right;width:100px;">Total</div></div>';
    log = JSON.parse(localStorage.getItem('userlogin'));
    for(var i=0;i<billArray.length;i++)
    {
        console.log(i);
        if((billArray[i])[0].User==log.username)
        {
            var sp= '<div class="productinbill" style="border-top:1px solid; padding:10px 0px;"><div style="float:left;width:100px">'+i+'</div><div style="width:50%;float:left;">'+(billArray[i])[0].Info+'</div><div style="float:left"><span style="margin-right:30px">'+(billArray[i])[0].Date+'</span><div style="margin-right:30px;float:left;width:120px;">'+(billArray[i])[0].Time+'</div></div><div style="margin-left:40px;float:left;width:100px;">'+parseInt((billArray[i])[0].Total).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + 'VND</div></div>';
            hien+=sp;
            document.getElementById('showshow').innerHTML=a+hien;
            document.getElementById('inbill').style.display="none";
            document.getElementById('navnav').style.display="none";
        }
    }
}

function showOrderList() {
    if(localStorage.getItem('users')===null){
		return false;
	}
    var y= JSON.parse(localStorage.getItem('userlogin'));
    var billarr=[];
    billarr=JSON.parse(localStorage.getItem('bill'));
    if(billarr===null)
    {
        var a='<div class="noorder">No orders yet</div>';
        document.getElementById('broad').innerHTML=a;
    }
    else
    {
        var tr  ='<table id="manageadmin">'
                +'<tr><td>Bill ID</td>'
                +'<td class="td">Product(s)</td>'
                +'<td class="td">Detail</td>'
                +'<td class="td">Status</td>'
                +'<td class="td">Confirm</td>'
                +'<td class="td">Cancel</td></tr>';
        for(var i=0;i<billarr.length;i++) {
            var o="'"+billarr[i][0].User+"'" ;
            var u="'"+billarr[i][0].Time+"'" ;
            var h="'"+billarr[i][0].Date+"'" ;
            var stt="'"+billarr[i][0].Status+"'";
            tr  +='<tr><td>'+i+'</td>'
                +'<td class="td" style="width:35%">'+billarr[i][0].Info+'</td>'
                +'<td class="td" style="font-size:30px;text-align:center;width:20px" onclick="showDetail('+o+','+u+','+h+')"><i class="fa fa-info-circle detail"></i></td>'
                +'<td class="td">'+billarr[i][0].Status+'</td>'
                +'<td class="td"><button class="btn" onclick="xulydon('+i+','+stt+')" id="degree">&#x2713;</button></td>'
                +'<td class="td"><button class="btn" onclick="xulydon2('+i+','+stt+')" id="confirm">&times;</button></td></tr>';
                console.log(billarr[i][0].User+','+billarr[i][0].Time+','+billarr[i][0].Date);
        }
        tr=tr+'</table>';
        var s = '<button id="hideopennav" onclick="onoff()">&#x2630;</button><div id="admintest">Welcome back, '+y.username+'</div>'
                + tr
                +'</div>';
        document.getElementById('broad').innerHTML=s;
    }
        document.getElementById('mnp').style.textAlign ='left';
        document.getElementById('mnu').style.textAlign ='left';
        document.getElementById('am').style.textAlign ='left';
        //document.getElementById('ht').style.textAlign ='left';
        document.getElementById('ol').style.textAlign ='center';
        document.getElementById('mp').style.textAlign ='left';
        document.getElementById('tk').style.textAlign ='left';
        document.getElementById('thongke').style.textAlign ='left';
}

function xulydon(xldon,status){
    if(status=='Processed')
    {
        swal({
            title: 'Error',
            text: 'This order has been processed!',
            icon: 'error',
            button: 'Ok',
        }).then(function () {showOrderList()});
    }
    else
    {
        var billArray =[],cartArray2=[], productArray=[],x="";
        billArray= JSON.parse(localStorage.getItem('bill'));
        cartArray2=JSON.parse(localStorage.getItem('cart2'));
        productArray=JSON.parse(localStorage.getItem('products'));
        for(var i=0;i<billArray.length;i++){
            if(i==xldon) {
                if(confirm('Confirm Order?')) {
                    for(var k=0;k<cartArray2.length;k++) {
                        for(var j=0;j<productArray.length;j++) {
                            if(cartArray2[k].productID==productArray[j].productID&&billArray[i][0].BillID==xldon&&cartArray2[k].idd==xldon) {
                                x=parseInt(cartArray2[k].amount);	
                                productArray[j].amount-=x;
                            }
                        }
                    }
                    localStorage.setItem('products',JSON.stringify(productArray));
                    billArray[i][0].Status='Processed';
                    localStorage.setItem('cart2',JSON.stringify(cartArray2));	
                }
                else{
                    break;
                }
            }
        }
        localStorage.setItem('bill',JSON.stringify(billArray));
    }
        showManageProduct(1);
        showOrderList();
}


function xulydon2(xldon2,status) {
    if(status=='Not process yet')
    {
        swal({
            title: 'Error',
            text: 'This order is still in pending status!',
            icon: 'error',
            button: 'Ok',
        }).then(function () {showOrderList()});
    }
    else
    {
        var billArray =[],cartArray2=[], productArray=[],x="";
        billArray= JSON.parse(localStorage.getItem('bill'));
        cartArray2=JSON.parse(localStorage.getItem('cart2'));
        productArray=JSON.parse(localStorage.getItem('products'));
        for(var i=0;i<billArray.length;i++){
            if(i==xldon2) {
                if(confirm('Cancel Order?')) {
                    for(var k=0;k<cartArray2.length;k++) {
                        for(var j=0;j<productArray.length;j++) {
                            if(cartArray2[k].productID==productArray[j].productID&&billArray[i][0].BillID==xldon2&&cartArray2[k].idd==xldon2) {
                                x=parseInt(cartArray2[k].amount);	
                                productArray[j].amount+=x;
                            }
                        }
                    }
                    localStorage.setItem('products',JSON.stringify(productArray));
                    billArray[i][0].Status='Not process yet';
                    localStorage.setItem('cart2',JSON.stringify(cartArray2));
                }
                else{
                    break;
                }
            }
        }
        localStorage.setItem('bill',JSON.stringify(billArray));
    }
    showManageProduct(1);
    showOrderList();
}

function chitiet(x,y,z,n,m,l){
    var k1="'"+x+"'";
    var k2="'"+y+"'";
    console.log(x);
    document.getElementById("ct").style.display='block';
    var x='<div style="float: left;width: 392px;height:100%;background-color: rgba(235, 235, 235, 0.68);">'
          +'<div style="float: left;width: 395px;height:400px;" id="ct1">'
          +'<img style="width: 390px;height:395px;" id="anhct1"  src="'+x+'">'
          +'</div>'
          +'<div style="float:left;width: 395px;height:80px;" id="ct2">'
          +'<span onclick="hienanhsp('+k1+')"><img style="width: 100px;height:75px;"  src="'+x+'"></span>'
          +'<span onclick="hienanhsp('+k2+')"><img style="width: 100px;height:75px;margin-left: 1px;"  src="'+y+'"></div></span>'
          +'</div>'
          +'</div>'
          +'<div style="float: left;width: 485px;height:365px;margin-top: 28px;background-color: white;" id="ct3">'
          +'<div style="font-size: 22px;margin-left: 10px;height: 50px;">'+l+'</div>'
          +'<div style="width:470px;margin-left: 5px;border-bottom: groove rgba(240, 240, 240, 0.265);"></div>'
          +'<div style="width:180;height: 30px;height: 50px;background-color: rgba(220, 220, 220, 0.626);margin-left: 2px;margin-right: 2px;margin-top: 5px;">'
          +'<div style="float: left;width: 95px;margin-top: 13px;margin-left: 22px;">Rating:</div>'   
          +'<div class="stars" >'
          +'<form action="">'
          +'<input class="star star-5" id="star-5" type="radio" name="star"/>'
          +'<label class="star star-5" for="star-5"></label>'
          +'<input class="star star-4" id="star-4" type="radio" name="star"/>'
          +'<label class="star star-4" for="star-4"></label>'
          +'<input class="star star-3" id="star-3" type="radio" name="star"/>'
          +'<label class="star star-3" for="star-3"></label>'
          +'<input class="star star-2" id="star-2" type="radio" name="star"/>'
          +'<label class="star star-2" for="star-2"></label>'
          +'<input class="star star-1" id="star-1" type="radio" name="star"/>'
          +'<label class="star star-1" for="star-1"></label>'
          +'</form>'
          +'</div>'
          +'</div>'
          +'<div style="margin-top: 5px;background-color: white;height: 50px;padding-top: 15px;margin-left:2px;margin-right: 2px;"><span style="margin-left: 20px;">HotLine: 03145957</span></div>'
          +'<div style="margin-top: 5px;background-color:rgba(220, 220, 220, 0.626);height: 50px;padding-top: 15px;margin-left:2px;margin-right: 2px;"><span style="margin-left: 20px;">Guarantee: SGU Team 8</span></div>'
          +'<div style="margin-top: 5px;padding-top: 7px;background-color: white;margin-left:2px;margin-right: 2px;height: 30px;">'
          +'<span style="margin-left: 20px;">Color</span>'
          +'<div style="width:35px;height:35px;border-radius:50px;background-color: black;margin-left: 20px;margin-top: 5px;border: rgba(226, 226, 226, 0.762);border: groove;"></div>'
          +'</div>'
          +'<div style="margin-top: 0px;text-align:center;float:right" class="hients" onclick="hienchitiet()">Detail</div>'
          +'<div style="margin-top: 50px;padding-top: 7px;background-color: white;margin-left:2px;margin-right: 2px;height: 30px;">'
          +'<span style="margin-left: 20px;font-size: 35px;">'+parseInt(m).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + 'VND</span>'
          +'</div>'
          +'<div class="out" id="getout" onclick="out()"><input type="button" value="X" class="out1"></div>'
          +'</div>'
          +'<div style="width:485px;height:95px;float: left;">'
          +'<div style="text-align:center;margin-top:15px;cursor:pointer">'
          +'<div style="display:none;float:left;border:groove rgba(240, 240, 240, 0.265);width:50px;padding:auto;font-weight:20;height: 50px;line-height:45px;margin-left: 20px;">'
          +'<input type="text" style="text-align:center;height:30px;outline:none;width: 30px;" id="sluong" value="1">'
          +'</div>'
          +'</div>'
          +'<div style="float: left;height: 60px;width: 200px;border: groove; margin-left: 30px;border-radius: 50px;text-align: center;padding-top: 17px;background-color:red;color: white;cursor: pointer;" onclick="addtocart2('+n+')">ADD TO CART</div>'
          +'</div>';
 document.getElementById("ct").innerHTML=x;
 var ct='<img src="'+z+'" style="width:400px;height:495px"></img>';
 document.getElementById("thongso").innerHTML=ct;
}
function hienanhsp(k){
    document.getElementById("anhct1").src=k;
}
function out(){
    document.getElementById("ct").style.display='none';
    document.getElementById("thongso").style.display='none';
    document.getElementById("ct").classList.remove("dichuyen");
}
function hienchitiet(){
    document.getElementById("thongso").style.display='block';
    document.getElementById("ct").classList.add("dichuyen");
}

function onoff() {
    var x=document.getElementById('menubar');
    var y=document.getElementById('broad');
    if(x.style.display=='block')
    {
        x.style.display='none';
        y.style.width='100%';
    }
    else
    {
        x.style.display='block';
        y.style.width='82%';
    }
}

function showDetail(a,b,c) {
    var e=0,t='';
    var x=JSON.parse(localStorage.getItem('detail'));
    var y=JSON.parse(localStorage.getItem('bill'));
    var gg  ='<div class="closedt" onclick="closedetail()">&times;</div>'
            +'<div class="billdetailtxt">Bill Detail</div>'
            +'<table class="tabledetail"><tr><td>Products</td><td>Brand</td><td>Amount</td><td>Price</td><td style="border-right: solid 1px">Sum</td></tr>';
    var k=JSON.parse(localStorage.getItem('users'));
    for(var w=0;w<k.length;w++)
        if(a==k[w].username)
            var n=k[w].fullname;
    for(var i=0;i<x.length;i++)
    {
        if(x[i][0].Username==a && x[i][0].Time==b && x[i][0].Date==c)
        {
            var stt=y[i][0].Status;
            for(var u=1;u<x[i].length;u++)
            {
                var t=(parseInt(x[i][0].Total)).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ' VND';
                var date=x[i][0].Date;
                var time=x[i][0].Time;
                e+=x[i][u].Amount;
                gg+='<tr><td>'+x[i][u].Name+'</td><td>'+x[i][u].Brand+'</td><td>'+x[i][u].Amount+'</td><td>'+(parseInt(x[i][u].Price)).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ' VND</td><td style="border-right: solid 1px">'+(parseInt(x[i][u].Sum)).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ' VND</td></tr>';
            }
        }
    }
    gg  +='<tr><td>Total</td><td></td><td>'+e+'</td><td></td><td style="border-right: solid 1px">'+t+'</td></tr>'
        +'<tr><td >Customer: '+n+'</td><td style="border-right: solid 1px;">Time: '+time+'</td></tr>'
        +'<tr><td >Date: '+date+'</td><td style="border-right: solid 1px;">Status: '+stt+'</td></tr></table>';
    document.getElementById('detailtail').innerHTML=gg;
    document.getElementById('detailmodal').style.display='block';
}

function closedetail() {
    document.getElementById('detailmodal').style.display='none';
}


// function showHistorylist(){
//     if(localStorage.getItem('users')===null){
// 		return false;
//     }
//     if(localStorage.getItem('bill')===null){
// 		return false;
// 	}
//     var y= JSON.parse(localStorage.getItem('userlogin'));
//     var billarr=[];
//     billarr=JSON.parse(localStorage.getItem('bill'));
//     var tr  ='<table id="manageadmin">'
//             +'<td class="td">Product(s)</td>'
//             +'<td class="td">Customer</td>'
//             +'<td class="td">Date</td>'
//             +'<td class="td">Time</td>'
//             +'<td class="td">Status</td></tr>';
//     for(var i=0;i<billarr.length;i++) {
//         tr  +='<td class="td" style="width:35%">'+billarr[i][0].Info+'</td>'
//             +'<td class="td">'+billarr[i][0].User+'</td>'
//             +'<td class="td">'+billarr[i][0].Date+'</td>'
//             +'<td class="td">'+billarr[i][0].Time+'</td>'
//             +'<td class="td">'+billarr[i][0].Status+'</td></tr>';
// 	}
//     tr=tr+'</table>';
//     var s = '<button id="hideopennav" onclick="onoff()">&#x2630;</button><div id="admintest">Welcome back, '+y.username+'</div>'
//             + tr
//             +'</div>';
//     document.getElementById('broad').innerHTML=s;
//     document.getElementById('mnp').style.textAlign ='left';
//     document.getElementById('mnu').style.textAlign ='left';
//     document.getElementById('am').style.textAlign ='left';
//     document.getElementById('ht').style.textAlign ='center';
//     document.getElementById('ol').style.textAlign ='left';
//     document.getElementById('mp').style.textAlign ='left';
//     document.getElementById('tk').style.textAlign ='left';
// }

var modal = document.getElementById('id01');

window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}

function showSearch2(){
    var s2="'+i+'";
    var s3="'";
    var y= JSON.parse(localStorage.getItem('userlogin'));
    var a= '<button id="hideopennav" onclick="onoff()">&#x2630;</button><div id="admintest">Welcome back, '+y.username+'</div>'
   var s=a;
   s=s+'<form id="form1" name="form1" method="post" action="" class="nam"><span style="font-size:25px">DAY START:</span>'
   +'<label ><br>Năm:'
   +'<select name="ddlNam" id="yearbd" onchange="loadDay()" class="select-css">'
   +'</select>'
   +'</label>'
   +'<label >Month:'
   +'<select name="ddlThang" id="monthbd" onchange="loadDay()" class="select-css">'
   +'</select>'
   +'</label>'
   +'<label >Day:'
   +'<select name="ddlNgay" id="daybd" class="select-css">'
   +'</select>'
   +'</label>'
   +'<br/>'
   +'</form>'
   +'<form id="form1" name="form1" method="post" action="" class="nam2"><span style="font-size:25px">DAY END:</span>'
   +'<label><br>Year:'
   +'<select name="ddlNam" id="yearkt" onchange="loadDay()" class="select-css">'
   +'</select>'
   +'</label>'
   +'<label>Month:'
   +'<select name="ddlThang" id="monthkt" onchange="loadDay()" class="select-css">'
   +'</select>'
   +'</label>'
   +'<label>Day:'
   +'<select name="ddlNgay" id="daykt" class="select-css">'
   +'</select>'
   +'</label>'
   +'<br/>'
   +'</form>'
   +'<div onclick="kk()" class="TimKiem"><i class="fa fa-search"></i></div>'
   +'<div id="tk2" class="xuattk"></div>'
   document.getElementById('broad').innerHTML=s;
   document.getElementById('mnp').style.textAlign ='left';
   document.getElementById('mnu').style.textAlign ='left';
   document.getElementById('am').style.textAlign ='left';
   //document.getElementById('ht').style.textAlign ='left';
   document.getElementById('ol').style.textAlign ='left';
   document.getElementById('mp').style.textAlign ='left';
   document.getElementById('tk').style.textAlign ='center';
   document.getElementById('thongke').style.textAlign ='left';
    loadYearbd();
    loadMonthbd(); 
    loadDaybd();
    loadYearkt();
    loadMonthkt(); 
    loadDaykt();
}
//////////////////////////////////////////////////////////////////////
function loadYearbd()
{
Nam = document.getElementById("yearbd");
Nam.length = 0;
var iNam = 0;
var today = new Date();
for(iNam=2000; iNam<=today.getFullYear(); iNam++)
{
var optNam = document.createElement("option");
optNam.text = iNam;
optNam.value = iNam;
Nam.options.add(optNam);
}
}
/////////////////////////////////////////////////////
function loadYearkt(){
Nam = document.getElementById("yearkt");
Nam.length = 0;
var iNam = 0;
var today = new Date();
for(iNam=2000; iNam<=today.getFullYear(); iNam++)
{
var optNam = document.createElement("option");
optNam.text = iNam;
optNam.value = iNam;
Nam.options.add(optNam);
}
}
////////////////////////////////////////////////////////////////
function loadMonthbd()
{
Thang = document.getElementById("monthbd");
Thang.length = 0;
var iThang=0;
for(iThang=1; iThang<=12; iThang++)
{
var optThang = document.createElement("option");
optThang.text= iThang;
optThang.value = iThang;
Thang.options.add(optThang);
}
}
////////////////////////////////////////////////////////////////////////
function loadMonthkt(){
Thang = document.getElementById("monthkt");
Thang.length = 0;
var iThang=0;
for(iThang=1; iThang<=12; iThang++)
{
var optThang = document.createElement("option");
optThang.text= iThang;
optThang.value = iThang;
Thang.options.add(optThang);
}
}
//////////////////////////////////////////////////////////////////////
function loadDaybd()
{
Ngay = document.getElementById("daybd");
Ngay.length = 0;
var value = parseInt(Thang.value);
var SoNgay = 0;
switch (value)
{
case 2:
var gtNam = Nam.selectedIndex;
if((gtNam%4==0) && ((gtNam%100!=0)||(gtNam%400==0)))
{
SoNgay = 28;
}
else
{
SoNgay = 29;
}
break;
case 1: case 3: case 5: case 7: case 8: case 10: case 12:
SoNgay = 31;
break;
case 4: case 6: case 9: case 11:
SoNgay = 30;
break;
}
var iNgay=0;
for(iNgay=1; iNgay<=SoNgay; iNgay++)
{
var optNgay = document.createElement("option");
optNgay.text = iNgay;
optNgay.value = iNgay;
Ngay.options.add(optNgay);
}
}
///////////////////////////////////////////////////////////////////////
function loadDaykt(){
Ngay = document.getElementById("daykt");
Ngay.length = 0;
var value = parseInt(Thang.value);
var SoNgay = 0;
switch (value)
{
case 2:
var gtNam = Nam.selectedIndex;
if((gtNam%4==0) && ((gtNam%100!=0)||(gtNam%400==0)))
{
SoNgay = 28;
}
else
{
SoNgay = 29;
}
break;
case 1: case 3: case 5: case 7: case 8: case 10: case 12:
SoNgay = 31;
break;
case 4: case 6: case 9: case 11:
SoNgay = 30;
break;
}
var iNgay=0;
for(iNgay=1; iNgay<=SoNgay; iNgay++)
{
var optNgay = document.createElement("option");
optNgay.text = iNgay;
optNgay.value = iNgay;
Ngay.options.add(optNgay);
}
}
///////////////////////////////////////////////////////////////////////////////
function kk(){
   if(localStorage.getItem('bill')===null)
    {   
   var mang = [];
   localStorage.setItem('bill',JSON.stringify(mang));
    }
    localStorage.removeItem('timkiem');
      s1="";
    var e = document.getElementById("daybd");
    var y = e.options[e.selectedIndex].value;
    s1=s1+y+"/";
    var e = document.getElementById("monthbd");
    var y = e.options[e.selectedIndex].value;
    s1=s1+y+"/";
    var e = document.getElementById("yearbd");
    var y = e.options[e.selectedIndex].value;
    s1=s1+y;
    console.log(s1);
    s2="";
    var e = document.getElementById("daykt");
    var y = e.options[e.selectedIndex].value;
    s2=s2+y+"/";
    var e = document.getElementById("monthkt");
    var y = e.options[e.selectedIndex].value;
    s2=s2+y+"/";
    var e = document.getElementById("yearkt");
    var y = e.options[e.selectedIndex].value;
    s2=s2+y;
    console.log(s2);
    var temp1=s1.split('/');
    var temp2=s2.split('/');
    var yearS =parseInt(temp1[2]);
   var monthS =parseInt(temp1[1]);
   var dayS = parseInt(temp1[0]);
   var yearE = parseInt(temp2[2]);
   var monthE = parseInt(temp2[1]);
   var dayE = parseInt(temp2[0]);
   var bill=[],billtk=[],j=0;
   bill=JSON.parse(localStorage.getItem('bill'));
   if(bill.length!=0){
         for(var i=0;i<bill.length;i++){
             var id3=(bill[i])[0].Date.split('-');
             var day =parseInt(id3[0]);
             var month =parseInt(id3[1]);
             var year =parseInt(id3[2]);
             if(yearS==yearE && year==yearS){
           if(month>monthS && month<monthE){
               billtk[j]=(bill[i])[0];
                           j++;
           }
           else{
               if(month==monthS){
                   if(monthS==monthE){
                       if(day>=dayS && day<=dayE){
                           billtk[j]=(bill[i])[0];
                           j++;
                       }
                   }
                   else{
                       if(day>=dayS){
                           billtk[j]=(bill[i])[0];
                           j++;
                       }
                   }
               }
               else if(month==monthE){
                   if(monthS==monthE){
                       if(day>=dayS && day<=dayE){
                           billtk[j]=(bill[i])[0];
                           j++;
                       }
                   }
                   else{
                       if(day<=dayE){
                          billtk[j]=(bill[i])[0];
                           j++;
                       }
                   }
               }
           }
       }
       else{
           if(year>yearS && year<yearE){
               billtk[j]=(bill[i])[0];
                           j++;
           }
           else{
               if(year==yearS || year==yearE){
                   if(year==yearS){
                       if(month>=monthS){
                           if(month>monthS){
                               billtk[j]=(bill[i])[0];
                           j++;
                           }
                           else{
                               if(day>=dayS){
                                   billtk[j]=(bill[i])[0];
                           j++;
                               }
                           }
                       }
                   }
                   else{
                       if(month<=monthE){
                           if(month<monthE){
                               billtk[j]=(bill[i])[0];
                           j++;
                           }
                           else{
                               if(day<=dayE){
                                   billtk[j]=(bill[i])[0];
                           j++;
                               }
                           }
                       }
                   }
               }
           }
       }
         }
         if(billtk.length!=0){
         localStorage.setItem('timkiem',JSON.stringify(billtk));
         var s="";
         for(var i=0;i<billtk.length;i++){
             s=s+'<div style="float:left;margin-left:20px">'+billtk[i].BillID+'</div>'
             +'<div style="float:left;margin-left:20px">'+billtk[i].Date+'</div>'
             +'<div style="float:left;margin-left:20px">'+billtk[i].Info+'</div>'
             +'<div style="float:left;margin-left:20px">'+billtk[i].Status+'</div>'
             +'<div style="float:left;margin-left:20px">'+billtk[i].Time+'</div>'
             +'<div style="float:left;margin-left:20px">'+billtk[i].Total+'</div>'
             +'<div style="float:left;margin-left:20px">'+billtk[i].User+'</div><br>';
           }
           document.getElementById('tk2').innerHTML=s;
         }
   }
}

function createBill() {
    var productArray=JSON.parse(localStorage.getItem('products'));
    var cartArray=JSON.parse(localStorage.getItem('cart'));
    for(var j=0;j<cartArray.length;j++){
        for(var k=0;k<productArray.length;k++){
            if(cartArray[j].amount>productArray[k].amount){
                alert("error");
                return false;
            }
            else{
                var billarr=[],user="",sumbill=[],total=0;
                billarr=JSON.parse(localStorage.getItem('bill'));
                if(localStorage.getItem('bill')===null){
                    var billarr=[];
                    localStorage.setItem('bill',JSON.stringify(billarr));
                }
                if(localStorage.getItem('detail')===null){
                    var detail=[];
                    localStorage.setItem('detail',JSON.stringify(detail));
                }
                var u = JSON.parse(localStorage.getItem('userlogin'));
                var onebill=JSON.parse(localStorage.getItem('cart'));
                var detail=[];
                detail=JSON.parse(localStorage.getItem('detail'));
                var x=[],t=0;
                for(var i=0;i<onebill.length;i++)
                {
                    t+=(onebill[i].price*onebill[i].amount);
                }
                x=[{Username:u.username,Status:status,Date:datecreate,Time:timing,Total:t}];
                for(var i=0;i<onebill.length;i++)
                {
                    var bien={Name:onebill[i].name,Amount:onebill[i].amount,Brand:onebill[i].brand,Price:onebill[i].price,Sum:(onebill[i].price*onebill[i].amount)};
                    x.push(bien);
                }
                detail.push(x);
                localStorage.setItem('detail',JSON.stringify(detail));

                var onebill =JSON.parse(localStorage.getItem('cart'));
                for(var i=0;i<x.length;i++)
                    total+=x[i].price*x[i].amount;
                    user=JSON.parse(localStorage.getItem('userlogin'));
                var info="",total=0;
                for(var i=0;i<onebill.length;i++)
                {
                    info+= onebill[i].amount+'X '+onebill[i].name+' | ';
                    total+=onebill[i].price*onebill[i].amount;
                }
                sumbill=[{BillID:billarr.length,User:user.username,Date:datecreate,Status:status,Total:total,Time:timing, Info:info}];
                billarr.push(sumbill);
                localStorage.setItem('bill',JSON.stringify(billarr));
                break;
            }
        }
        break;
    }
}

function createCart2(){
    if(localStorage.getItem('cart')===null)
    {
        return false;
    }
    var cartarr=[];
    cartarr=JSON.parse(localStorage.getItem('cart'));
    var productArray=JSON.parse(localStorage.getItem('products'));
    for(var j=0;j<cartarr.length;j++){
        for(var k=0;k<productArray.length;k++){
            if(cartarr[j].amount>productArray[k].amount){
                alert("Not available, We only have "+productArray[k].amount+" product(s) remaining");
                return false;
            }
            else{
                if(localStorage.getItem('cart2')===null){
                    var cart2arr=[];
                    localStorage.setItem('cart2',JSON.stringify(cart2arr));
                }
                cart2arr=JSON.parse(localStorage.getItem('cart2'));
                if(cart2arr.length==0){
                    for(var i=0;i<cartarr.length;i++){
                        var bien={productID:cartarr[i].productID, brand: cartarr[i].brand, img: cartarr[i].img, name:cartarr[i].name, price:cartarr[i].price, amount:cartarr[i].amount,idd:0};
                        cart2arr.push(bien);
                        localStorage.setItem('cart2',JSON.stringify(cart2arr));
                   }
                }
                else {
                    var a=0,dem=1;
                    for(var i=0;i<cart2arr.length;i++){
                        if(a!=cart2arr[i].idd){
                            a=cart2arr[i].idd;
                            dem++;
                        }
                    }
                    for(var i=0;i<cartarr.length;i++){
                        var bien={productID:cartarr[i].productID, brand: cartarr[i].brand, img: cartarr[i].img, name:cartarr[i].name, price:cartarr[i].price, amount:cartarr[i].amount,idd:dem};
                        cart2arr.push(bien);
                        localStorage.setItem('cart2',JSON.stringify(cart2arr));
                    }
                }
                localStorage.removeItem('cart');
                swal({
                    title: 'Done!',
                    text:'Thank you for your purchasing!',
                    icon: 'success',
                    button: 'Ok!',
                  }).then ( function() { window.location.reload() });
                  break;
            }
        }
    }
}

function showThongke(){
    var billarr=[];
    var y= JSON.parse(localStorage.getItem('userlogin'));
    var a= '<button id="hideopennav" onclick="onoff()">&#x2630;</button><div id="admintest">Welcome back, '+y.username+'</div>';
    billarr=JSON.parse(localStorage.getItem('detail'));
    var tong,soluong,s=a;
    if(billarr==null)
    {
        alert("Dont have any bill");
    }
    else{
      for(var i=1;i<13;i++){
          s=s+'<div style="float:left;width:30%;padding:10px">Month:'+i+'</div>'
          tong=0;soluong=0;
           for(var j=0;j<billarr.length;j++){
            var temp=billarr[j][0].Date.split('-');
            var month=temp[1];
            if(month==i)
            {
               for(var u=1;u<billarr[j].length;u++)
                   {
                    soluong+=billarr[j][u].Amount;
                    tong+=billarr[j][u].Sum;
                   }
            }
           }
            s=s+'<div style="float:left;width:30%;padding:10px">Amount:'+soluong+'</div><div style="float:left;width:30%;padding:10px">REVENUE:'+tong.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ' VND</div>'
      }
      document.getElementById('broad').innerHTML=s;
      document.getElementById('mnp').style.textAlign ='left';
      document.getElementById('mnu').style.textAlign ='left';
      document.getElementById('am').style.textAlign ='left';
      document.getElementById('ol').style.textAlign ='left';
      document.getElementById('mp').style.textAlign ='left';
      document.getElementById('tk').style.textAlign ='left';
      document.getElementById('thongke').style.textAlign ='center';
    }
}