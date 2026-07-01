import React, { useState } from "react";
import { GlassPanel } from "../components/ui/GlassPanel";
import { LuxuryButton } from "../components/ui/LuxuryButton";
import { Input } from "../components/ui/Input";
import { Modal } from "../components/ui/Modal";

interface Supplier {
  id: string;
  company: string;
  contactPerson: string;
  phone: string;
  whatsApp: string;
  email: string;
  address: string;
  website: string;
  rating: number; // 1-5 scale
  leadTime: string;
  notes: string;
}

const mockSuppliers: Supplier[] = [
  {
    id: "1",
    company: "Acme Ingredients",
    contactPerson: "John Doe",
    phone: "+1-555-123-4567",
    whatsApp: "+1-555-123-4567",
    email: "john.doe@acme.com",
    address: "123 Ingredient Lane, Chemville, CA",
    website: "https://www.acmeingredients.com",
    rating: 4.5,
    leadTime: "3-5 business days",
    notes: "Reliable supplier, good for bulk orders.",
  },
  {
    id: "2",
    company: "BioExtracts Inc.",
    contactPerson: "Jane Smith",
    phone: "+44-20-7123-4567",
    whatsApp: "+44-20-7123-4567",
    email: "jane.smith@bioextracts.co.uk",
    address: "45 Research Road, Sciencetown, UK",
    website: "https://www.bioextracts.co.uk",
    rating: 4.8,
    leadTime: "7-10 business days",
    notes: "Specializes in organic and rare botanical extracts.",
  },
  {
    id: "3",
    company: "Global Chemicals",
    contactPerson: "Peter Jones",
    phone: "+61-2-9876-5432",
    whatsApp: "+61-2-9876-5432",
    email: "peter.jones@globalchem.com.au",
    address: "789 Industrial Drive, Sydney, Australia",
    website: "https://www.globalchem.com.au",
    rating: 3.9,
    leadTime: "5-7 business days",
    notes: "Competitive pricing, sometimes slower on delivery.",
  },
];

const SupplierCard: React.FC<{ supplier: Supplier; onEdit: (supplier: Supplier) => void; onDelete: (id: string) => void }> = ({ supplier, onEdit, onDelete }) => (
  <div className="bg-gradient-to-br from-gray-800 to-black rounded-lg p-4 shadow-lg text-gold-200 flex flex-col justify-between h-full">
    <div>
      <h3 className="text-xl font-bold mb-2 text-gold-300">{supplier.company}</h3>
      <p><strong>Contact:</strong> {supplier.contactPerson}</p>
      <p><strong>Phone:</strong> {supplier.phone}</p>
      <p><strong>WhatsApp:</strong> {supplier.whatsApp}</p>
      <p><strong>Email:</strong> {supplier.email}</p>
      <p><strong>Address:</strong> {supplier.address}</p>
      <p><strong>Website:</strong> <a href={supplier.website} target="_blank" rel="noopener noreferrer" className="text-gold-400 hover:underline">{supplier.website}</a></p>
      <p><strong>Rating:</strong> {supplier.rating} / 5</p>
      <p><strong>Lead Time:</strong> {supplier.leadTime}</p>
      <p className="text-sm text-gray-400 mt-2"><strong>Notes:</strong> {supplier.notes}</p>
    </div>
    <div className="mt-4 flex gap-2">
      <LuxuryButton onClick={() => onEdit(supplier)} className="flex-1 text-sm py-1">Edit</LuxuryButton>
      <LuxuryButton onClick={() => onDelete(supplier.id)} className="flex-1 text-sm py-1 bg-red-700 hover:bg-red-800">Delete</LuxuryButton>
    </div>
  </div>
);

export const SuppliersPage: React.FC = () => {
  const [suppliers, setSuppliers] = useState<Supplier[]>(mockSuppliers);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [currentSupplier, setCurrentSupplier] = useState<Omit<Supplier, "id"> & { id?: string }>({ // id is optional for new suppliers
    company: "",
    contactPerson: "",
    phone: "",
    whatsApp: "",
    email: "",
    address: "",
    website: "",
    rating: 0,
    leadTime: "",
    notes: "",
  });

  const filteredSuppliers = suppliers.filter((supplier) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return (
      supplier.company.toLowerCase().includes(lowerCaseSearchTerm) ||
      supplier.contactPerson.toLowerCase().includes(lowerCaseSearchTerm) ||
      supplier.email.toLowerCase().includes(lowerCaseSearchTerm)
    );
  });

  const handleAddEditSupplier = () => {
    if (isEditing && currentSupplier.id) {
      setSuppliers(suppliers.map(s => s.id === currentSupplier.id ? currentSupplier as Supplier : s));
    } else {
      const newId = String(suppliers.length + 1);
      setSuppliers([...suppliers, { ...currentSupplier as Supplier, id: newId }]);
    }
    setIsModalOpen(false);
    setIsEditing(false);
    setCurrentSupplier({
      company: "", contactPerson: "", phone: "", whatsApp: "", email: "",
      address: "", website: "", rating: 0, leadTime: "", notes: "",
    });
  };

  const handleEditClick = (supplier: Supplier) => {
    setCurrentSupplier(supplier);
    setIsEditing(true);
    setIsModalOpen(true);
  };

  const handleDeleteClick = (id: string) => {
    setSuppliers(suppliers.filter(s => s.id !== id));
  };

  const handleOpenAddModal = () => {
    setIsEditing(false);
    setCurrentSupplier({
      company: "", contactPerson: "", phone: "", whatsApp: "", email: "",
      address: "", website: "", rating: 0, leadTime: "", notes: "",
    });
    setIsModalOpen(true);
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-gold-100">
      <h1 className="text-4xl font-bold text-gold-300 mb-8">Suppliers</h1>

      <GlassPanel className="mb-6 p-4 flex flex-col md:flex-row gap-4 justify-between items-center">
        <Input
          type="text"
          placeholder="Search suppliers..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/3"
        />
        <LuxuryButton onClick={handleOpenAddModal} className="w-full md:w-auto">
          Add Supplier
        </LuxuryButton>
      </GlassPanel>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSuppliers.map((supplier) => (
          <SupplierCard
            key={supplier.id}
            supplier={supplier}
            onEdit={handleEditClick}
            onDelete={handleDeleteClick}
          />
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={isEditing ? "Edit Supplier" : "Add New Supplier"}>
        <div className="space-y-4 text-gold-100">
          <Input
            label="Company Name"
            value={currentSupplier.company}
            onChange={(e) => setCurrentSupplier({ ...currentSupplier, company: e.target.value })}
            placeholder="e.g., Acme Ingredients"
          />
          <Input
            label="Contact Person"
            value={currentSupplier.contactPerson}
            onChange={(e) => setCurrentSupplier({ ...currentSupplier, contactPerson: e.target.value })}
            placeholder="e.g., John Doe"
          />
          <Input
            label="Phone"
            value={currentSupplier.phone}
            onChange={(e) => setCurrentSupplier({ ...currentSupplier, phone: e.target.value })}
            placeholder="e.g., +1-555-123-4567"
          />
          <Input
            label="WhatsApp"
            value={currentSupplier.whatsApp}
            onChange={(e) => setCurrentSupplier({ ...currentSupplier, whatsApp: e.target.value })}
            placeholder="e.g., +1-555-123-4567"
          />
          <Input
            label="Email"
            type="email"
            value={currentSupplier.email}
            onChange={(e) => setCurrentSupplier({ ...currentSupplier, email: e.target.value })}
            placeholder="e.g., john.doe@example.com"
          />
          <Input
            label="Address"
            value={currentSupplier.address}
            onChange={(e) => setCurrentSupplier({ ...currentSupplier, address: e.target.value })}
            placeholder="e.g., 123 Main St, Anytown, USA"
          />
          <Input
            label="Website"
            value={currentSupplier.website}
            onChange={(e) => setCurrentSupplier({ ...currentSupplier, website: e.target.value })}
            placeholder="e.g., https://www.example.com"
          />
          <Input
            label="Rating (1-5)"
            type="number"
            value={currentSupplier.rating}
            onChange={(e) => setCurrentSupplier({ ...currentSupplier, rating: parseFloat(e.target.value) })}
            min="0"
            max="5"
            step="0.1"
            placeholder="e.g., 4.5"
          />
          <Input
            label="Lead Time"
            value={currentSupplier.leadTime}
            onChange={(e) => setCurrentSupplier({ ...currentSupplier, leadTime: e.target.value })}
            placeholder="e.g., 3-5 business days"
          />
          <Input
            label="Notes"
            value={currentSupplier.notes}
            onChange={(e) => setCurrentSupplier({ ...currentSupplier, notes: e.target.value })}
            placeholder="Any additional notes"
          />
          <LuxuryButton onClick={handleAddEditSupplier} className="w-full">
            {isEditing ? "Save Changes" : "Add Supplier"}
          </LuxuryButton>
        </div>
      </Modal>
    </div>
  );
};
