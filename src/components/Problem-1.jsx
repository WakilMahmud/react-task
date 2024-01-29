import React, { useState } from "react";
import Table from "./Table";

const Problem1 = () => {
	const [users, setUsers] = useState([]);
	const [show, setShow] = useState("all");
	const [error, setError] = useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();

		const name = e.target.name.value;
		const status = e.target.status.value.toLowerCase();

		if (name && status) {
			const newUser = { name, status };
			setUsers((prevUsers) => [...prevUsers, newUser]);
			e.target.name.value = "";
			e.target.status.value = "";
			setError("");
		} else {
			if (!name) setError("User Name is required");
			else if (!status) setError("Status is required");
		}
	};

	const handleClick = (val) => {
		setShow(val);
	};

	return (
		<div className="container">
			<div className="row justify-content-center mt-5">
				<h4 className="text-center text-uppercase mb-5">Problem-1</h4>
				<div className="col-6 ">
					<form onSubmit={handleSubmit} className="row gy-2 gx-3 align-items-center mb-4">
						<div className="col-auto">
							<input type="text" name="name" className="form-control" placeholder="Name" />
						</div>
						<div className="col-auto">
							<input type="text" name="status" className="form-control" placeholder="Status" />
						</div>
						<div className="col-auto">
							<button type="submit" className="btn btn-primary">
								Submit
							</button>
						</div>
					</form>
					{error && <span className="text-danger fs-6 -mb-3">{error}</span>}
				</div>

				<div className="col-8">
					<ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
						<li className="nav-item">
							<button className={`nav-link ${show === "all" && "active"}`} type="button" onClick={() => handleClick("all")}>
								All
							</button>
						</li>
						<li className="nav-item">
							<button className={`nav-link ${show === "active" && "active"}`} type="button" onClick={() => handleClick("active")}>
								Active
							</button>
						</li>
						<li className="nav-item">
							<button className={`nav-link ${show === "completed" && "active"}`} type="button" onClick={() => handleClick("completed")}>
								Completed
							</button>
						</li>
					</ul>
					<div className="tab-content"></div>
					<Table users={users} show={show}></Table>
				</div>
			</div>
		</div>
	);
};

export default Problem1;
