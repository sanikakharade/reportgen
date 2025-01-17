import api from "./interceptor";
export const getTemplates = async () => {
    return api.get(`/api/show_report/?report_id=81`);
}
