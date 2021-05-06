class Form {
	constructor() {
		this.form = document.getElementById("form");
		this.submit = document.getElementById("submit");
		this.values = {
			username: "",
			email: "",
			password: "",
			terms: false,
		};
		this.errorValues = { ...this.values };
		this.events();
	}

	events() {
		this.form.addEventListener("change", e => this.handleFormChange(e));
		this.submit.addEventListener("click", e => this.validateForm(e));
	}

	handleFormChange(e) {
		const { name, value, checked, type } = e.target;
		const state = type === "checkbox" ? checked : value;
		this.values = {
			...this.values,
			[name]: state,
		};
	}

	validateForm() {
		e.preventDefault();
		const { username, email, password, terms } = this.values;
		let temp = [];
		username.value === "" || username.length;
	}
}

const form = new Form();

// Initialize form values
// let values = {
// 	username: "",
// 	email: "",
// 	password: "",
// 	terms: false,
// };

// // Update form state on change
// document
// 	.getElementById("form")
// 	.addEventListener("change", e => handleFormChange(e));

// function handleFormChange(e) {
// 	const { name, value, checked, type } = e.target;
// 	const state = type === "checkbox" ? checked : value;
// 	values = {
// 		...values,
// 		[name]: state,
// 	};
// }

// // Validate form details
// document
// 	.getElementById("submit")
// 	.addEventListener("click", e => validateForm(e));

// function validateForm(e) {
// 	e.preventDefault();
// 	const { username, email, password, terms } = values;
// 	let temp = [];
// 	username.value === "" || username.length;
// }
