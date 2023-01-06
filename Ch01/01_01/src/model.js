var displayName = "My desk";
var inventoryType = "furn";
var trackingNumber = "FD123";
var createDate = new Date();
var originalCost = 245;
function getInventoryItem(trackingNumber) {
}
function saveInventoryItem(item) {
}
var inventoryItem = getInventoryItem(trackingNumber);
inventoryItem.createDate = new Date();
saveInventoryItem(inventoryItem);
