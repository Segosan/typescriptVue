/* eslint-disable */
import http from "@/http-common";

class ContactDataService {
  getAll() {
    return http.get("/contacts");
  }

  get(id: string) {
    return http.get(`/contacts/${id}`);
  }

  create(data: any) {
    return http.post("/contacts", data);
  }

  update(id: any, data: any) {
    return http.put(`/contacts/${id}`, data);
  }

  delete(id: any) {
    return http.delete(`/contacts/${id}`);
  }
}

export default new ContactDataService();