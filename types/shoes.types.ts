export interface ItemMan{
	name: string
	description:string
	vendor:string
	price:number
	foto_url: string
	isFavorite:boolean
	isAdded:boolean
	isMan:boolean
}

export interface ItemWoman{
	name: string
	description:string
	vendor:string
	price:number
	foto_url: string
	isFavorite:boolean
	isAdded:boolean
	isWoman:boolean
}


export interface ItemFavorite{
	name: string
	description:string
	vendor:string
	price:number
	foto_url: string
	isFavorite:boolean
	isAdded:boolean
	isMan?:boolean
	isWoman?:boolean
}

export interface ItemAdded{
	name: string
	description:string
	vendor:string
	price:number
	foto_url: string
	isFavorite:boolean
	isAdded:boolean
	isMan?:boolean
	isWoman?:boolean
}

export interface ItemOrder{
	userId:string
	totalPrice:number
	createdAt:string
	status:string
	userName:string
	userCity:string
	userNumber:string
	deliveryMethod:string
	paymentMethod:string
	userCountry:string
	userRegion:string
}



