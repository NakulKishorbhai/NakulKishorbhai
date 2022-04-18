function validateForm()
{
  let product_id = document.forms['signup']['product_id'].value;
  let product_desc = document.forms['signup']['product_desc'].value;
  let price = document.forms['signup']['price'].value;
  let user_name = document.forms['signup']['user_name'].value;
  let new_supplier = document.forms['signup']['new_supplier'];
  let signed = document.forms['signup']['signed'];
  let quality_test = document.forms['signup']['quality_test'];
  
  
  let error = document.getElementById("error");
  error.innerHTML = "";
  let flag = true;
  var count=0;
  
  var numbers = /^[0-9]+$/;
  if(product_id.match(numbers) && product_id.length == 8)
  {
  }
  else
  {
	  if(count<3)
	  {
		  error.innerHTML += "Enter Valid Product ID. <br>";
		  flag = false;
		  count++;
	  }
	  
  }
  
  var upper = /^[A-Z]/;
  if(upper.test(product_desc) && product_desc.length >= 20)
  {
  }
  else
  {
	  if(count<3)
	  {
		  error.innerHTML += "Enter Valid Product Description. <br>";
		  flag = false;
		  count++;
	  }
  }
  
  var dec = /^[-+]?[0-9]+\.[0-9]+$/;
  if(price.match(numbers) && !price.match(dec) && price < 1000)
  {
  }
  else
  {
	  if(count<3)
	  {
		  error.innerHTML += "Enter Valid Price. <br>";
		  flag = false;
		  count++;
	  }
  }
  
  var alpha=/[a-zA-Z]/;
  if(alpha.test(user_name) && user_name.length > 6)
  {
  }
  else
  {
	  if(count<3)
	  {
		  error.innerHTML += "Enter Valid UserName. <br>";
		  flag = false;
		  count++;
	  }
	  
  }
  
  if(new_supplier.checked || signed.checked || quality_test.checked )
  {
  }
  else
  {
	  if(count<3)
	  {
		  error.innerHTML += "Please Select Supplier Status. <br>";
		  flag = false;
		  count++;
	  }
	  
  }
  
  if(flag==false)
  {
	  error.style.backgroundColor = "#454545";
  }
  else
  {
	  alert("Success!!!");
  }
  
  return flag;
}