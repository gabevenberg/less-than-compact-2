JEIEvents.hideItems(event => {
    for (const item of global.removedItems) {
        event.hide(item)
    }
})
