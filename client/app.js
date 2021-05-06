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
