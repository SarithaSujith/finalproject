import React from 'react';

function SignUp() {
	return (
		<main className='uk-flex-auto uk-section uk-flex uk-flex-row uk-flex-center'>
			<article className='uk-container uk-container-small'>
				<h1>SignUp</h1>
				<form className='uk-form-stacked' action='/login' method='post'>
					<div className='uk-margin'>
						<lable className='uk-form-label' htmlFor='name'>
							Name:
						</lable>
						<div className='uk-form-controls uk-inline'>
							<span className='uk-form-icon' data-uk-icon='icon: user'></span>
							<input
								className='uk-input'
								id='name'
								type='text'
								name='name'
								placeholder='Name'
								autoFocus
								required
							/>
						</div>
					</div>
					<div className='uk-margin'>
						<lable className='uk-form-label' htmlFor='email'>
							Email:
						</lable>
						<div className='uk-form-controls uk-inline'>
							<span className='uk-form-icon' data-uk-icon='icon: mail'>
								{' '}
							</span>
							<input
								className='uk-input'
								id='email'
								type='email'
								name='email'
								placeholder='Email'
								required
							/>
						</div>
					</div>
					<div className='uk-margin'>
						<lable className='uk-form-label' htmlFor='password'>
							Password:
						</lable>
						<div className='uk-form-controls uk-inline'>
							<span className='uk-form-icon' data-uk-icon='icon: lock'></span>
							<input
								className='uk-input'
								id='password'
								type='password'
								name='password'
								placeholder='Password'
								required
							/>
						</div>
					</div>
					<div className='uk-margin'>
						<label className='uk-form-label' htmlFor='passwordConfirmation'>
							Password Confirmation:
						</label>
						<div className='uk-form-controls uk-inline'>
							<span className='uk-form-icon' data-uk-icon='icon: lock'></span>
							<input
								className='uk-input'
								id='passwordConfirmation'
								type='password'
								name='Password Confirmation'
								placeholder='password Confirmation'
								required
							/>
						</div>
					</div>
					<div className='uk-margin'>
						<button
							className='uk-button uk-button-primary uk-width-expand'
							type='submit'
						>
							SignUp
						</button>
					</div>
				</form>
				<small>
					<span className='uk-margin-small-right'>
						Already have an Account?
					</span>
					<a className='uk-link-heading' href='/login/'>
						login
						<span
							className='uk-margin-small-left uk-icon'
							data-uk-icon='arrow-right'
						></span>
					</a>
				</small>
			</article>
		</main>
	);
}

export default SignUp;
