import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ModalC from "./ModalC";

const ModalA = () => {
	let [allContacts, setAllContacts] = useState([]);
	const [isChecked, setIsChecked] = useState(false);

	useEffect(() => {
		fetch("https://contact.mediusware.com/api/contacts/")
			.then((res) => res.json())
			.then((data) => {
				setAllContacts(data.results);
			});
	}, []);

	if (isChecked) {
		allContacts = allContacts?.filter((contact) => contact.id % 2 == 0);
	}

	return (
		<>
			<div>
				<div className="modal fade" id="ModalA" tabIndex="-1" aria-labelledby="exampleModalLabel">
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<h1 className="modal-title fs-5" id="exampleModalLabel">
									Modal A
								</h1>
							</div>
							<div className="modal-body">
								<button className="btn btn-lg btn-outline-primary me-3" type="button" data-bs-toggle="modal" data-bs-target="#ModalA">
									All Contacts
								</button>

								<Link to="../us-contacts">
									<button className="btn btn-lg btn-outline-warning me-3" type="button" data-bs-toggle="modal" data-bs-target="#ModalB">
										US Contacts
									</button>
								</Link>
								<button type="button" className="btn border-danger-subtle" data-bs-dismiss="modal" aria-label="Close">
									Close
								</button>

								<div>
									{allContacts.map((contact) => (
										<p key={contact.id} data-bs-toggle="modal" data-bs-target="#exampleModal">
											{contact.id}. {contact.phone}
										</p>
									))}
								</div>
							</div>

							<div className="ms-3 py-2">
								<input className="form-check-input" type="checkbox" id="checkboxNoLabel" onClick={() => setIsChecked(!isChecked)} />
								<span className="ms-1">Only Even</span>
							</div>
						</div>
					</div>
				</div>
				<ModalC></ModalC>
			</div>
		</>
	);
};

export default ModalA;
