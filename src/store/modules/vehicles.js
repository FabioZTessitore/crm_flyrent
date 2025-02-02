const state = {
	// fake data, must be loaded from db
	//  - remember to add `loaded` state
	vehicles: [
		{ id: 1, license_plate: 'AB 123 CD', brand: 'Ferrari', model: 'F40' },
		{ id: 2, license_plate: 'XY 000 ZZ', brand: 'Porsche', model: 'Carrera' },
	],

	nextId: 3
}

const getters = {
	vehicles: state => state.vehicles
}

const mutations = {
	addVehicle (state, payload) {
		state.vehicles.push(payload)
	},

	editVehicle: (state, payload) => {
		const index = state.vehicles.findIndex(vehicle => vehicle.id === payload.id)
		state.vehicles.splice(index, 1, payload)
	},
	
	deleteVehicle: (state, payload) => {
		state.vehicles = state.vehicles.filter(vehicle => vehicle.id !== payload)
	},

	incrNextId (state) {
		state.nextId++
	}
}

const actions = {
	addVehicle (state, payload) {
		payload.id = state.nextId
		state.commit('incrNextId')
		state.commit('addVehicle', payload)
	},

	editVehicle (state, payload) {
		state.commit('editVehicle', payload)
	},

	deleteVehicle (state, payload) {
		state.commit('deleteVehicle', payload)
	}
}

export default {
	state,
	getters,
	mutations,
	actions
}