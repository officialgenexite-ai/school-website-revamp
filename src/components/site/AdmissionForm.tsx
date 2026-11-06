import { useState, type FormEvent } from "react";
import { GRADES, SCHOOL } from "@/constants/school";

export function AdmissionForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const msg = [
      "Admission Inquiry",
      `Student Name: ${f.get("studentName")}`,
      `Father's Name: ${f.get("fatherName")}`,
      `Contact: ${f.get("phoneNumber")}`,
      `Grade: ${f.get("targetGrade")}`,
      `Previous School / Remarks: ${f.get("previousSchool") || "-"}`,
    ].join("\n");
    window.open(`https://wa.me/${SCHOOL.phoneIntl}?text=${encodeURIComponent(msg)}`, "_blank");
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="card-surface grid gap-4 p-6 md:grid-cols-2 md:p-8">
      <label className="field">Student Name<input name="studentName" required maxLength={80} /></label>
      <label className="field">Father's Name<input name="fatherName" required maxLength={80} /></label>
      <label className="field">Contact Number<input name="phoneNumber" type="tel" required pattern="[0-9+\- ]{10,15}" /></label>
      <label className="field">Grade Applying For
        <select name="targetGrade" required defaultValue="">
          <option value="" disabled>Select grade</option>
          {GRADES.map((g) => <option key={g}>{g}</option>)}
        </select>
      </label>
      <label className="field md:col-span-2">Previous School / Remarks<textarea name="previousSchool" rows={3} maxLength={300} /></label>
      <div className="md:col-span-2 flex flex-wrap items-center gap-4">
        <button type="submit" className="btn-gold">Send Inquiry via WhatsApp</button>
        {sent && <p className="text-sm text-muted-foreground">WhatsApp opened — please press send there.</p>}
      </div>
    </form>
  );
}
