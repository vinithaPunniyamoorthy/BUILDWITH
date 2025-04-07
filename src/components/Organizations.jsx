import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Organizations.css'; 

const Organizations = () => {
    const [organizations, setOrganizations] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/organizations/')
            .then(response => response.json())
            .then(data => setOrganizations(data));
    }, []);

    return (
        <div className="container py-5">
            <h1 className="text-center mb-4">Organizations</h1>
            {organizations.map(org => (
                <div key={org.id} className="card shadow-lg p-4 mb-4">
                    <h2 className="text-primary">{org.name}</h2>
                    {org.logo && <img src={org.logo} alt={`${org.name} logo`} className="img-fluid rounded mb-3" style={{ maxWidth: '200px' }} />}
                    <p><strong>Description:</strong> {org.description}</p>
                    <p><strong>Contact:</strong> {org.contact_number}</p>
                    <p><strong>Location:</strong> {org.location}</p>
                    <p><strong>Email:</strong> <a href={`mailto:${org.email}`} className="text-decoration-none">{org.email}</a></p>
                    <p><strong>Website:</strong> <a href={org.website} className="btn btn-primary btn-sm" target="_blank" rel="noopener noreferrer">Visit Website</a></p>
                    {org.facebook_url && <p><strong>Facebook:</strong> <a href={org.facebook_url} target="_blank" rel="noopener noreferrer">{org.facebook_url}</a></p>}
                    <p><strong>Created At:</strong> {new Date(org.created_at).toLocaleDateString()}</p>
                    <p><strong>Verified:</strong> {org.verified ? 'Yes' : 'No'}</p>

                    <div className="mt-4">
                        <h3>History</h3>
                        {org.histories.map(history => (
                            <div key={history.id} className="card mb-3">
                                <div className="card-body">
                                    <p><strong>Heading:</strong> {history.heading}</p>
                                    <p><strong>Projects:</strong> {history.projects}</p>
                                    <p><strong>Appreciations:</strong> {history.appreciations}</p>
                                    <p><strong>Description:</strong> {history.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-4">
                        <h3>Values</h3>
                        {org.values.map(value => (
                            <div key={value.id} className="card mb-3">
                                <div className="card-body">
                                    <p>{value.values}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-4">
                        <h3>Projects</h3>
                        {org.projects.map(project => (
                            <div key={project.id} className="card mb-3">
                                <div className="card-body">
                                    <p><strong>Project Name:</strong> {project.project_name}</p>
                                    {project.image && <img src={project.image} alt={project.project_name} className="img-fluid rounded mb-3" style={{ maxWidth: '200px' }} />}
                                    <p><strong>Location:</strong> {project.location}</p>
                                    <p><strong>Description:</strong> {project.description}</p>
                                    <p><strong>Rate:</strong> {project.rate}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-4">
                        <h3>Gallery</h3>
                        <div className="row">
                            {org.galleries.map(gallery => (
                                <div key={gallery.id} className="col-md-3 mb-3">
                                    <img src={gallery.image} alt="Gallery Image" className="img-fluid rounded" />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-4">
                        <h3>Machinery</h3>
                        {org.machineries.map(machinery => (
                            <div key={machinery.id} className="card mb-3">
                                <div className="card-body">
                                    <p><strong>Machinery Name:</strong> {machinery.machinery_name}</p>
                                    <img src={machinery.image} alt={machinery.machinery_name} className="img-fluid rounded mb-3" style={{ maxWidth: '200px' }} />
                                    <p><strong>Key Features:</strong> {machinery.key_features}</p>
                                    <p><strong>Description:</strong> {machinery.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-4">
                        <h3>Certifications</h3>
                        {org.certifications.map(certification => (
                            <div key={certification.id} className="card mb-3">
                                <div className="card-body">
                                    <p><strong>Name:</strong> {certification.name}</p>
                                    <p><strong>Year:</strong> {certification.year}</p>
                                    <p><strong>Provided By:</strong> {certification.provided_by}</p>
                                    <a href={certification.certification} className="btn btn-primary btn-sm" target="_blank" rel="noopener noreferrer">View Certification</a>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-4">
                        <h3>Partners</h3>
                        {org.partners.map(partner => (
                            <div key={partner.id} className="card mb-3">
                                <div className="card-body">
                                    <p><strong>Name:</strong> {partner.name}</p>
                                    <img src={partner.logo} alt={partner.name} className="img-fluid rounded mb-3" style={{ maxWidth: '200px' }} />
                                    <p><strong>Year:</strong> {partner.year}</p>
                                    <p><strong>Description:</strong> {partner.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-4">
                        <h3>Client Reviews</h3>
                        {org.client_reviews.map(review => (
                            <div key={review.id} className="card mb-3">
                                <div className="card-body">
                                    <p><strong>Client Name:</strong> {review.client_name}</p>
                                    <img src={review.client_image} alt={review.client_name} className="img-fluid rounded mb-3" style={{ maxWidth: '200px' }} />
                                    <p><strong>Client Organization:</strong> {review.client_organization}</p>
                                    <p><strong>Client Address:</strong> {review.client_address}</p>
                                    <p><strong>Review:</strong> {review.review}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Organizations;