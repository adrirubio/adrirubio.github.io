# -*- encoding: utf-8 -*-
# stub: support-for 1.0.7 ruby lib

Gem::Specification.new do |s|
  s.name = "support-for".freeze
  s.version = "1.0.7"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["John Albin Wilkins".freeze]
  s.date = "2016-10-17"
  s.description = "A module for Sass module developers to ease conditional browser support.".freeze
  s.email = "virtually.johnalbin@gmail.com".freeze
  s.homepage = "https://github.com/JohnAlbin/support-for".freeze
  s.licenses = ["GPL-2.0".freeze]
  s.rubygems_version = "3.4.20".freeze
  s.summary = "Add conditional browser support to your Sass module".freeze

  s.installed_by_version = "3.4.20" if s.respond_to? :installed_by_version

  s.specification_version = 4

  s.add_runtime_dependency(%q<sass>.freeze, ["~> 3.3"])
end
