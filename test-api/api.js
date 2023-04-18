export default async (req, res) => {
  const { isGetAll } = req.query;
  const { email, organizationId } = req.user;
  if (isGetAll) {
    const organizationStaffs = await getOrganizationStaff(organizationId);
    return res.send(organizationStaffs);
  }
  if (process.env.NODE_ENV === "development") {
    const data = await readFile("./mock/teppeki-staffs.json", "utf-8").catch(
      () => "[]"
    );
    const staffs = req.query.id
      ? JSON.parse(data).filter((staff) => staff.id === parseInt(req.query.id))
      : JSON.parse(data);
    return res.send(staffs);
  }
  const staffs = await azoomOrgApi(email)
    .get("staffs", {
      searchParams: req.query,
    })
    .json();
  return res.send(staffs);
};
