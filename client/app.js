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
		this.errors = { ...this.values };
		this.events();
	}

	events() {
		this.form.addEventListener("change", e => this.handleFormChange(e));
		this.submit.addEventListener("click", e =>
			this.handleFormValidation(e)
		);
	}

	handleFormChange(e) {
		const { name, value, checked } = e.target;
		const string = typeof this.values[name] === "string";
		const state = string ? value : checked;
		this.values = {
			...this.values,
			[name]: state,
		};
	}

	isFormValid() {
		const { username, email, password, terms } = this.values;
		console.log(username.length);

		this.errors.username =
			username.length > 0 && username.length < 23
				? ""
				: "Username must not be empty and be no more than 22 characters";
		this.errors.email = /$^|.+@.+..+/.test(email)
			? ""
			: "Email is invalid";
		this.errors.password =
			password.length > 5
				? ""
				: "Password must not be empty and be at least 6 characters";
		this.errors.terms = terms
			? ""
			: "You must agree to the terms and conditions";
		return Object.values(this.errors).every(e => e === "");
	}

	handleFormValidation(e) {
		e.preventDefault();
		const errorsContainer = document.getElementById("errors-container");
		const errorList = document.getElementById("error-list");
		errorList.innerHTML = "";

		if (!this.isFormValid()) {
			Object.keys(this.errors).map(error => {
				const errorText = `<li>${this.errors[error]}</li>`;
				errorList.insertAdjacentHTML("beforeend", errorText);
			});
			errorsContainer.style.display = "block";
		} else {
			window.location.href = "/";
		}
	}
}

const form = new Form();
