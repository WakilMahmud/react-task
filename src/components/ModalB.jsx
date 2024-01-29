import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ModalC from "./ModalC";

const ModalB = () => {
	let [USContacts, setUSContacts] = useState([]);
	const [isChecked, setIsChecked] = useState(false);

	useEffect(() => {
		fetch("https://contact.mediusware.com/api/country-contacts/United%20States/")
			.then((res) => res.json())
			.then((data) => {
				setUSContacts(data.results);
			});
	}, []);

	if (isChecked) {
		USContacts = USContacts?.filter((contact) => contact.id % 2 == 0);
	}

	return (
		<>
			<div>
				<div className="modal fade" id="ModalB" tabIndex="-1" aria-labelledby="exampleModalLabel">
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<h1 className="modal-title fs-5" id="exampleModalLabel">
									Modal B
								</h1>
							</div>
							<div className="modal-body">
								<Link to="../all-contacts">
									<button className="btn btn-lg btn-outline-primary me-3" type="button" data-bs-toggle="modal" data-bs-target="#ModalA">
										All Contacts
									</button>
								</Link>
								<button className="btn btn-lg btn-outline-warning me-3" type="button" data-bs-toggle="modal" data-bs-target="#ModalB">
									US Contacts
								</button>

								<button type="button" className="btn border-danger-subtle" data-bs-dismiss="modal" aria-label="Close">
									Close
								</button>

								<div>
									{USContacts.map((contact) => (
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

export default ModalB;
