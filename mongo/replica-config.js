cfg = rs.conf()
cfg.members[0].priority = 2
cfg.members[1].priority = 0.5
cfg.members[2].priority = 0.5
rs.reconfig(cfg, { force: 1 })
