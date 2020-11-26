export interface IMenu {
    sectionName: string
    items: Array<IMenuItem>
}

export interface IMenuItem {
    _id: string
    name: string
    price: string
    description: string
    image: string
}