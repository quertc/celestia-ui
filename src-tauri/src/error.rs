use thiserror::Error;

pub type CelestiaResult<T> = Result<T, CelestiaUIError>;

#[derive(Error, Debug)]
pub enum CelestiaUIError {
    #[error(transparent)]
    Reqwest(#[from] reqwest::Error),
    #[error("request processing error: '{0}'")]
    Request(String),
}

impl serde::Serialize for CelestiaUIError {
    fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error>
    where
        S: serde::ser::Serializer,
    {
        serializer.serialize_str(self.to_string().as_ref())
    }
}
