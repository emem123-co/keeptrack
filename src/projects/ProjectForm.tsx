import React from "react";


function ProjectForm() {
	return (
		<form className="input-group vertical">
			<label htmlFor="name">Project Name</label>
			<input type="text" name="name" placeholder="enter name" />

			<label htmlFor="description">Project Description</label>
			<textarea name="description" placeholder="enter description" defaultValue={""} />

			<label htmlFor="budget">Project Budget</label>
			<input type="number" name="budget" placeholder="enter budget" />

			<label>
				<input type="checkbox" name="isActive" />
				Active?
			</label>

			<div className="input-group">
				<button className="primary bordered medium">Save</button>
				<span />
				<button type="button" className="bordered medium">
					cancel
				</button>
			</div>
		</form>
	);
}
export default ProjectForm;
