var displayName = "Jess's standing desk";
var inventoryType = "furniture";
var trackingNumber = "FD123455";
var createDate = new Date();
var originalCost = 425;
originalCost = "A lot";
function getInventoryItem(trackingNumber) {
    return null;
}
function saveInventoryItem(item) {
}
var inventoryItem = getInventoryItem(trackingNumber);
var updateInventoryItem = inventoryItem;
inventoryItem.createDate = new Date();
saveInventoryItem(inventoryItem);
