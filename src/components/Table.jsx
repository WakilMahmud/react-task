import React from "react";

const Table = ({ users, show }) => {
	if (show === "active") {
		users = users.filter((user) => user.status === "active");
	} else if (show === "completed") {
		users = users.filter((user) => user.status === "completed");
	} else {
		const customSort = (a, b) => {
			const statusOrder = { active: 1, completed: 2 };

			const aOrder = statusOrder[a.status] || 3;
			const bOrder = statusOrder[b.status] || 3;

			return aOrder - bOrder;
		};

		users = users.slice().sort(customSort);
	}

	return (
		<table className="table table-striped ">
			<thead>
				<tr>
					<th scope="col-6">Name</th>
					<th scope="col-6">show</th>
				</tr>
			</thead>
			<tbody>
				{users?.map((user, index) => (
					<tr key={index}>
						<td className="col-6"> {user?.name}</td>
						<td className="col-6"> {user?.status}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default Table;
