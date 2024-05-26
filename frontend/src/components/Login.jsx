import React from "react";

function LoginPage() {
    return (
			<div>
				<header>Slack Chat</header>
				<div>
					<div>LOGO</div>
					<form action=''>
						<h1>Войти</h1>
						<div>
							<input
								name='username'
								autocomplete='username'
								required=''
								placeholder='Ваш ник'
								id='username'
								class='form-control'
								value='John Doe'
							/>
							<label class='form-label' for='username'>
								Ваш ник
							</label>
						</div>
						<div class='form-floating mb-4'>
							<input
								name='password'
								autocomplete='current-password'
								required=''
								placeholder='Пароль'
								id='password'
								class='form-control'
								value='qwerty'
							/>
							<label class='form-label' for='password'>
								Пароль
							</label>
						</div>
						<button type='submit' class='w-100 mb-3 btn btn-outline-primary'>
							Войти
						</button>
					</form>
				</div>
			</div>
		)
}

export default LoginPage;