//=======================================================
//BÀI 1: QUẢN LÝ TUYỂN SINH
//BẢNG ĐIỂM ƯU TIÊN
const area_A=2;
const area_B=1;
const area_C=0.5;
const area_X=0;

const object_1=2.5;
const object_2=1.5;
const object_3=1;
const object_0=0;

//HÀM TÍNH ĐIỂM ƯU TIÊN KHU VỰC
function areaCheck (){
    var radioA= document.getElementById("areaA");
    var radioB= document.getElementById("areaB");
    var radioC= document.getElementById("areaC");
    var radioX= document.getElementById("areaX");
    if (radioA.checked){
        console.log(area_A);
        return area_A;
    }else if (radioB.checked){
        console.log(area_B);
        return area_B;
    }else if (radioC.checked){
        console.log(area_C);
        return area_C;
    }else if (radioX.checked){
        console.log(area_X);
        return area_X;
    }else {
        console.log("Chưa chọn khu vực")
    }
}

//HÀM TÍNH ĐIỂM ƯU TIÊN ĐỐI TƯỢNG
function objectCheck (){
    var radio1= document.getElementById("object1");
    var radio2= document.getElementById("object2");
    var radio3= document.getElementById("object3");
    var radio0= document.getElementById("object0");
    if (radio1.checked){
        console.log(object_1);
        return object_1;
    }else if (radio2.checked){
        console.log(object_2);
        return object_2;
    }else if (radio3.checked){
        console.log(object_3);
        return object_3;
    }else if (radio0.checked){
        console.log(object_0);
        return object_0;
    }else {
        console.log("Chưa chọn đối tượng")
    }
}

//HÀM TÍNH TỔNG ĐIỂM, XÉT KẾT QUẢ ĐẬU RỚT
function scoreCalc(){
    var test1= parseFloat(document.getElementById("inputTest1").value);
    console.log(test1);
    var test2= parseFloat(document.getElementById("inputTest2").value);
    console.log(test2);
    var test3= parseFloat(document.getElementById("inputTest3").value);
    console.log(test3);

    var areaScore= areaCheck();
    var objectScore= objectCheck();

    var totalScore=test1+test2+test3+areaScore+objectScore;
    console.log(totalScore);
    var passScore=parseFloat(document.getElementById("inputPassScore").value);
    console.log(passScore);
    
    if(test1==0 || test2==0 || test3==0){
        console.log("Rớt");
        document.getElementById("txtNotify").innerHTML="Kết quả thi: Rớt <br>Tổng điểm là: "+totalScore;
        }else if(totalScore>passScore){
            console.log("Đậu");
            document.getElementById("txtNotify").innerHTML="Kết quả thi: Đậu <br>Tổng điểm là: "+totalScore;
            }else{
            console.log("Rớt");
            document.getElementById("txtNotify").innerHTML="Kết quả thi: Rớt <br>Tổng điểm là: "+totalScore;
        }
}
document.getElementById("btnCalc").onclick=scoreCalc;

//=======================================================
// BÀI 2: TÍNH TIỀN ĐIỆN

function totalPayCalc(){
var numberKw=parseFloat(document.getElementById("inputKw").value);
var totalPay=0;
if(0<=numberKw && numberKw<=50 )
    totalPay=numberKw*500;
else if (50<numberKw && numberKw<=100 )
    totalPay=50*500+(numberKw-50)*650;
else if (100<numberKw && numberKw<=150 )
    totalPay=50*500+50*650+(numberKw-100)*850;
else if (150<numberKw && numberKw<=200 )
    totalPay=50*500+50*650+50*850+(numberKw-150)*1100;
else if (200<numberKw)
    totalPay=50*500+50*650+50*850+50*1100+(numberKw-200)*1300;
else
    console.log("Không hợp lệ");
    console.log(totalPay);
document.getElementById("kwNotify").innerHTML="Tổng tiền điện là: "+totalPay;
}

document.getElementById("kwBtn").onclick= totalPayCalc;


//=======================================================
// BÀI 3: TÍNH THUẾ THU NHẬP CÁ NHÂN

//HÀM TÍNH THUẾ SUẤT:
    function taxRateCalc(taxIncome){
        if (0<=taxIncome && taxIncome<=60){
            taxRate=0.05;
            console.log(taxRate);
            return taxRate;
        }else if(60<taxIncome && taxIncome<=120){
            taxRate=0.1;
            console.log(taxRate);
            return taxRate;
        }else if(120<taxIncome && taxIncome<=210){
            taxRate=0.15;
            console.log(taxRate);
            return taxRate;
        }else if(210<taxIncome && taxIncome<=384){
            taxRate=0.2;
            console.log(taxRate);
            return taxRate;
        }else if(384<taxIncome && taxIncome<=624){
            taxRate=0.25;
            console.log(taxRate);
            return taxRate;
        }else if(624<taxIncome && taxIncome<=960){
            taxRate=0.3;
            console.log(taxRate);
            return taxRate;
        }else if(960<taxIncome){
            taxRate=0.35;
            console.log(taxRate);
            
        }else {
            console.log("Không hợp lệ")
        }
    }
    

        
  //TÍNH THUẾ THU NHẬP PHẢI TRẢ TRẢ      
        function taxCalc(){  
            var totalIncome=parseFloat(document.getElementById("inputIncome").value);
            console.log(totalIncome);
            var people=parseFloat(document.getElementById("inputPeople").value);
            console.log(people);
            var taxIncome=totalIncome-4-people*1.6;
            console.log(taxIncome);
            var taxRate= taxRateCalc(taxIncome);
            var payTax=taxIncome*taxRate*1000000;
            console.log(payTax);
            payTax= new Intl.NumberFormat('en-EN', { maximumSignificantDigits: 3 }).format(payTax);
            document.getElementById("taxNotify").innerHTML="Thuế thu nhập phải trả là: "+payTax+"(VND)";
        }
        
        document.getElementById("taxBtn").onclick=taxCalc;


//=======================================================
//BÀI 4: TÍNH TIỀN CÁP

INDI_INVOICE = 4.5;
INDI_BASIC = 20.5;
INDI_PRO = 7.5;

COM_INVOICE = 15;
COM_BASIC = 75;
COM_CONNECT_UNIT = 5;
COM_PRO = 50;

function myFunction(element) {
    // var catergory = document.getElementById("type").value;
    //document.getElementById("demo").innerHTML = "You selected: " + catergory;

    var valueText = element.options[element.selectedIndex].text;

    if (valueText == "Doanh nghiệp") {
        document.getElementById("inputAmount").style.display = "block";
        // console.log("Catergory la: " +valueText)
    } 
    else {
        document.getElementById("inputAmount").style.display = "none";
    }
    return valueText;
}
document.getElementById("inputAmount").style.display = "none";

// Tính tiền xử lý hoá đơn
function invoiceCheck() {
    var invoiceCost = 0;
    valueText = "";
    if (valueText == "Nhà dân") {
        invoiceCost = INDI_INVOICE;
    } else {
        invoiceCost = COM_INVOICE;
    }
    return invoiceCost;
}

// Tính phí dịch vụ cơ bản
function basicServiceCheck() {
    var basicServiceCost = 0;
    valueText = "";
    var connectAmount = parseInt(document.getElementById("inputAmount").value);
    if (valueText == "Nhà dân") {
        basicServiceCost = INDI_BASIC;
    } else if (connectAmount > 0) {
        basicServiceCost = COM_BASIC + connectAmount*COM_CONNECT_UNIT;
    } else {
        basicServiceCost = COM_BASIC;
    }
    return basicServiceCost;
}

// Tính phí thuê kênh cao cấp
function proChannelCheck() {
    var proChannelCost = 0;
    valueText = "";
    var proChannel = parseInt(document.getElementById("inputProChannel").value);
    if (valueText == "Nhà dân") {
        proChannelCost = proChannel*INDI_PRO;
    } else {
        proChannelCost = proChannel*COM_PRO;
    }
    return proChannelCost;
}

// Tính tổng tiền cáp
function totalInternet() {
    var totalInternetCost = 0;
    invoiceCost = invoiceCheck();
    basicServiceCost = basicServiceCheck();
    proChannelCost = proChannelCheck();
    totalInternetCost = invoiceCost + basicServiceCost + proChannelCost;

    document.getElementById("txtThongBaoInternet").innerHTML = "Số tiền cáp là: " +totalInternetCost;
    
}
document.getElementById("btnInternet").onclick = totalInternet;