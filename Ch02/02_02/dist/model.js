var displayName = "Jess's standing desk";
var inventoryType = "furniture";
var trackingNumber = "FD123455";
var createDate = new Date();
var originalCost = 425;
function getInventoryItem(trackingNumber) {
    return null;
}
function saveInventoryItem(item) {
    item.trackingNumber = "12345";
}
var inventoryItem = getInventoryItem(trackingNumber);
var updatedInventoryItem = inventoryItem;
inventoryItem.createDate = new Date();
saveInventoryItem({
    displayName: "Name",
    inventoryType: "stuff",
    trackingNumber: "BC123",
    createDate: new Date()
});
