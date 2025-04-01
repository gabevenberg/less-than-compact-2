// // priority: 1
ServerEvents.recipes(event => {
    for (const item of global.removedItems) {
        event.remove([{ output: item }, { input: item }])
    }
})
