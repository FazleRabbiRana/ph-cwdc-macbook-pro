/**
* Update price function
*/
function updatePrice(costFieldId, price) {
	// update additional items cost
	document.getElementById(costFieldId).innerText = parseFloat(price);
	// update total cost
	calculateTotal();
	// reset the promo code apply
	resetPromoCodeApply();
}

/**
* Calculate total function
*/
function calculateTotal() {
	const minimumCost = getProductPrice('base');
	const memoryCost = getProductPrice('memory');
	const storageCost = getProductPrice('storage');
	const deliveryCost = getProductPrice('delivery');
	const totalCostField = document.getElementById('total_cost');
	const grandTotalField = document.getElementById('product_grand_total');
	const totalCostAmount = minimumCost + memoryCost + storageCost + deliveryCost;
	// update total price
	totalCostField.innerText = totalCostAmount;
	// update grand total
	grandTotalField.innerText = totalCostAmount;
}

/**
* Get product price function
*/
function getProductPrice(productName) {
	const productPriceText = document.getElementById(productName + '_cost').innerText;
	const productPrice = parseFloat(productPriceText);
	return productPrice;
}

/**
* Reset promo code apply function
*/
function resetPromoCodeApply() {
	const promoCodeInputField = document.getElementById('promo_code_input');
	const promoCodeApplyButton = document.getElementById('btn_apply_promo');
	promoCodeInputField.value = '';
	promoCodeApplyButton.removeAttribute('disabled');
	promoCodeApplyButton.setAttribute('title', 'Apply promo code to get 20% discount!');
}

// Memory 8gb button click
document.getElementById('btn_memory_8gb').addEventListener('click', function(){
	updatePrice('memory_cost', 0);
});
// Memory 16gb button click
document.getElementById('btn_memory_16gb').addEventListener('click', function(){
	updatePrice('memory_cost', 180);
});
// Storage 256gb button click
document.getElementById('btn_storage_256gb').addEventListener('click', function(){
	updatePrice('storage_cost', 0);
});
// Storage 512gb button click
document.getElementById('btn_storage_512gb').addEventListener('click', function(){
	updatePrice('storage_cost', 100);
});
// Storage 1tb button click
document.getElementById('btn_storage_1tb').addEventListener('click', function(){
	updatePrice('storage_cost', 180);
});
// Delivery free button click
document.getElementById('btn_delivery_free').addEventListener('click', function(){
	updatePrice('delivery_cost', 0);
});
// Delivery charged button click
document.getElementById('btn_delivery_charged').addEventListener('click', function(){
	updatePrice('delivery_cost', 20);
});

// 
// handle memory buttons click
// document.getElementById('memory_options').addEventListener('click', function(e){
// 	// const memory8GB = document.getElementById('btn_memory_8gb');
// 	const memory16GB = document.getElementById('btn_memory_16gb');
// 	if(e.target == memory16GB) {
// 		console.log('add extra 180');
// 	} else {
// 		console.log('add 0.');
// 	}
// });

/**
* Handle promo code apply button click
*/
document.getElementById('btn_apply_promo').addEventListener('click', function(e){
	const promoCodeInputField = document.getElementById('promo_code_input');
	const promoCodeInput = promoCodeInputField.value.toLowerCase();
	if(promoCodeInput == 'stevekaku') {	
		const totalCostField = document.getElementById('total_cost');
		const totalPrice = parseFloat(totalCostField.innerText);
		const discountAmount = parseFloat(totalPrice) * (20 / 100);
		const discountedGrandTotal = totalPrice - discountAmount;
		document.getElementById('product_grand_total').innerText = discountedGrandTotal;
		// disable this apply button to prevent multiple click
		e.target.setAttribute('disabled', true);
		e.target.setAttribute('title', 'Promo code\'s already been applied.');
	} else {
		alert('Promo code didn\'t match.')
	}
});